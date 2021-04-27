const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const ws = require("ws");
const systemApi = require("./systemApi")

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
app.use("/api/",systemApi);
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

const wsServer = new ws.Server({ noServer: true });
const sockets = [];
wsServer.on("connection", (socket) => {
  sockets.push(socket);
  socket.on("message", (message) => {
    for (const socket of sockets) {
      socket.send(message);
    }
  });
});

const server = app.listen(3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
  server.on("upgrade", (req, res, head) => {
    wsServer.handleUpgrade(req, res, head, (socket) => {
      wsServer.emit("connection", socket, req);
    });
  });
});
