const request = require('supertest');
const express = require('express');
const app = express();
const systemApi = require("../src/server/systemApi")
app.use(systemApi)

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
});