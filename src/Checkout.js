import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";

const CURRENCY = "USD";
const fromUSDToCent = amount => amount * 100;

const successPayment = clearBox => {
  alert("Payment Successful! Your box will be available shortly.");
};

const errorPayment = clearBox => {
  console.log(clearBox);
  alert("Payment Successful! Your box will be available shortly.");
  clearBox();
};

const onToken = (amount, description, clearBox) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment(clearBox))
    .catch(errorPayment(clearBox));

const Checkout = ({ name, description, amount, clearBox }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description, clearBox)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default withRouter(Checkout);
