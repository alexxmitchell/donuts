module.exports = {
  getDonuts: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_donuts()
      .then(donuts => {
        res.status(200).json(donuts);
        console.log(donuts);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  addDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const {
      kind,
      peanuts,
      bacon,
      strawberries,
      gold,
      sprinkles,
      chocdrizzle,
      pbdrizzle,
      glaze
    } = req.body;

    dbInstance
      .addDonut([
        kind,
        peanuts,
        bacon,
        strawberries,
        gold,
        sprinkles,
        chocdrizzle,
        pbdrizzle,
        glaze
      ])
      .then(() => {
        res.status(200).json();
      })
      .catch(() => {
        res.status(500).json();
      });
  }
};
