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
    const { kind, topping1, topping2, topping3, price } = req.body;

    dbInstance
      .add_donut([kind, topping1, topping2, topping3, price])
      .then(() => {
        res.status(200).json();
      })
      .catch(e => {
        console.log(e);
        // res.status(500).json();
      });
  }

  // editDonut: (req, res) =>{
  //   const dbInstance =req.app.get('db');
  //   console.log(req.params);

  //   const {id}= req.params;
  //   dbInstance
  // }
};
