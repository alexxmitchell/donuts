require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const port = process.env.PORT || 3001;

const path = require("path");

//controllers
const dc = require(`${__dirname}/controller/donutCtrl`);
const bc = require(`${__dirname}/controller/boxCtrl`);
const ac = require(`${__dirname}/controller/authCtrl`);
const uc = require(`${__dirname}/controller/userCtrl`);
const sc = require(`${__dirname}/controller/stripeCtrl`);

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(ac.strategy);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .get_user(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .add_user([user.name, user.id])
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
    successRedirect: "http://gooddonuts.fun/#/donut",
    failureRedirect: "/login",
    failureFlash: true
  })
);
app.use(express.static(`${__dirname}/../build`));

//auth controller
app.get("/api/person", ac.getUser);
app.get("/api/logout", ac.logoutUser);

//user controller
app.put(`/api/updateprofile`, uc.updateUser);

//donut controller
app.get(`/api/mydonuts`, dc.getDonuts);
app.post("/api/adddonut", dc.addDonut);
app.delete(`/api/removedonut/:donut_id/:boxid`, dc.deleteDonut);
app.get("/api/alltoppings", dc.getAllToppings);
app.post("/api/addTopping", dc.addTopping);
app.get(`/api/gettoppings/:id`, dc.getDoTop);
app.delete("/api/removetopping/:donut_id/:topping_id", dc.removeTopping);

//box controller
app.get("/api/box/:box_id", bc.getBox);
app.post("/api/createbox", bc.createBox);
app.put("/api/addbox/:box_id/:id", bc.addToBox);
app.get("/api/boxtops/:donut_id", bc.boxToppings);
app.get("/api/total/:box_id", bc.boxTotal);

//stripe controller
app.post("/api/buydonuts", sc.buyDonuts);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
