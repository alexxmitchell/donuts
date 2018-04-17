const Auth0strategy = require("passport-auth0");

const strategy = new Auth0strategy(
  {
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope: "openid profile",
    callbackURL: "/login"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

const getUser = (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Please login" });
  } else {
    res.status(200).json(req.user);
  }
};
const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
  strategy,
  getUser,
  logoutUser
};
