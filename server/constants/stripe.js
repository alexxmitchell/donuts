const configureStripe = require("stripe");
require("dotenv").config();

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_live_MY_SECRET_KEY"
    : `${process.env.REACT_APP_STRIPE_SECRET}`;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
