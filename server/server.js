const cors = require("cors");
const { json } = require("body-parser");

const CORS_WHITELIST = require("./constants/frontend");

const corsOptions = {
  origin: (origin, callback) =>
    CORS_WHITELIST.indexOf(origin) !== -1
      ? callback(null, true)
      : // : callback(null, true)
        callback(new Error("Not allowed by CORS"))
};

const configureServer = app => {
  // app.use(cors(corsOptions));

  app.use(json());
};

module.exports = configureServer;
