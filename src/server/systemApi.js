const express = require("express");

const systemApi = express.Router();
const passport = require("passport");

const users = [
    {
        id: 1,
        username: "Ola Nordmann",
        email: "ola@service.com",
        isAdmin: false,
    },
    {
        id: 2,
        username: "sensur kristiania",
        email: "sensur@kristiania.no",
        isAdmin: true,
    },
];
const chatLog = [
    {
        id: 0,
        message: "Test",
        sender: "Ammar",
    },
];
systemApi.get("/retrieveMessage", (req, res) => {
    res.json(chatLog);
});
systemApi.post("/sendMessage", (req, res) => {
    const { message, username } = req.body;
    const newMessage = {
        id : chatLog.length +1,
        message: message,
        sender: username,
    };
    chatLog.push(newMessage);
});

systemApi.post("/createUser", (req, res) => {
    const { name, email, description } = req.body;
    const newUser = {
        id : users.length +1,
        username: name,
        email: email,
        description: description,
    };
    users.push(newUser);
});
systemApi.get("/users", (req, res) => {
    res.json(users);
});
systemApi.get("/profile", (req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    console.log(req.user);
    const { username, email, profilePicture } = req.user;
    res.json({ username, email, profilePicture });
});

systemApi.get(
    "/login",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
systemApi.get("/oauth2callback", passport.authenticate("google"), (req, res) => {
    users.push(req.user);
    res.redirect("/");
});
systemApi.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = systemApi;