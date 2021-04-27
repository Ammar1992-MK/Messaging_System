const request = require('supertest');
const express = require('express');
const app = express();
const systemApi = require("../src/server/systemApi")
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(systemApi);


describe("system API", () => {
    it("can return registered users", async () => {
        await request(app).get("/users")
            .then(response => {
                expect(response.body.find(({id}) => id ===1)).toMatchObject({
                    username: "Ola Nordmann",
                    email: "ola@service.com",
                    isAdmin: false,
                });
            });
    });

    it("can create new user", async () => {

        await request(app)
            .post("/createUser")
            .send({
                username : "testUser",
                email : "testuser@email.com",
                isAdmin : false,
                })
            .expect(201);
        await request(app)
            .get("/users")
            .then(response => {
                //I used ID because users array on the server already has to objects which makes it possible to test with ids
                expect(response.body.map(({ id })  => id)).toContain(3);
            });
    });

    it("can get sent inbox message", async () => {
        await request(app).get("/retrieveMessage")
            .then(response => {
                expect(response.body.find(({id}) => id === 1)).toMatchObject({
                    id: 1,
                    message: "Test",
                    sender: "Ammar",
                })
            })
    });

    it("can send an inbox message", async  () => {
        await request(app).post("/sendMessage")
            .send({
                message : "test message",
                sender : "jest",
            })
            .expect(201);
        await request(app)
            .get("/retrieveMessage")
                .then(response => {
                    expect(response.body.map(({message}) => message)).toContain("test message");
                });
    });

});