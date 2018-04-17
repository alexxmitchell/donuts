require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const port = process.env.PORT || 3001;

const dc = require("./controller/donutCtrl");
const bc = require("./controller/boxCtrl");
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
  app
    .get("db")
    .get_user(id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .add_user([name, id])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => {
      console.log(err);
    });
});
passport.deserializeUser((obj, done) => {
  return done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/box",
    failureRedirect: "/login",
    failureFlash: true
  })
);
//donut controller
app.get("/api/donuts", dc.getDonuts);
app.get("/api/box", bc.getBox);
app.post("/api/donut", dc.addDonut);
app.post("/api/box", bc.addToBox);
app.delete(`/api/removedonut/:id`, bc.removeDonut); //need to add id parameter

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
