const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require ("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
app.use(
    session({
        secret: "32bjS959js",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(bodyParser.json());
app.use(cookieParser());

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "889522382035-uhsdcdtl5s4lrhi2j2g24q8q3r7dpog8.apps.googleusercontent.com",
            callbackURL: "/api/oauth2callback",
            clientSecret: "0_q3RKaftIvtKUpV-Pnuchh3",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            done(null, {
                username: profile.displayName,
                email: profile.emails[0].value,
                profilePicture: profile.photos[0].value,
            });
        }
    )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(passport.initialize());
app.use(passport.session());

app.get("/api/profile", (req, res) => {
    if(!req.user){
        return res.status(401).send();
    }
    const{username, email, profilePicture} = req.user;
    res.json({username, email, profilePicture});
})

app.get("/api/login", passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get("/api/oauth2callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/");
});

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));


app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api")) {
        return next();
    }
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

app.listen(3000, () => {
    console.log("Started on http://localhost:3000");
});
