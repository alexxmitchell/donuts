const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET);

module.exports = {
  buyDonuts: (req, res) => {
    const dbInstance = req.app.get("db");
    const token = req.body.stripeToken;
    console.log(req.body);

    stripe.charges.create(
      {
        amount: req.body.amount,
        source: token,
        currency: "usd",
        description: `Payment for box ${req.body.boxNo}`
      },
      (err, charge) => {
        dbInstance
          .buy_donuts([req.body.boxNo, req.body.amount])
          .then(() => {
            res.status(200).json({ message: "Payment Successful" });
          })
          .catch(e => console.log(e));
      }
    );
  }
};
