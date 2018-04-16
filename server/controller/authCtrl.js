const Auth0strategy = require("passport-auth0");

module.exports = new Auth0strategy(
  {
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope: "openid profile",
    callbackURL: "/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

getUser: (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Please login" });
  }
};
