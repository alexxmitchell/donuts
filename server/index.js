require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const port = process.env.PORT || 3001;

const dc = require("./controller/donutCtrl");
const strategy = require(`${__dirname}/controller/authCtrl`);

const app = express();

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 20000000
    }
  })
);

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((obj, done) => {
  return done(null, obj);
});

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/bag",
    failureRedirect: "/auth",
    failureFlash: true
  })
);
//donut controller
app.get("/api/donuts", dc.getDonuts);
app.post("/api/donut/:id", dc.addDonut);
app.get("/api/bag/:id");

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
