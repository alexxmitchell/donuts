module.exports = {
  getDonuts: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_donuts()
      .then(donuts => {
        res.status(200).json(donuts);
        // console.log(donuts);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  addDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    // console.log(req.body);
    const { kind } = req.body;
    const { id } = req.user;

    dbInstance
      .add_donut([id, kind])
      .then(resp => {
        res.status(200).json(resp[0]);
      })
      .catch(e => {
        console.log(e);
        // res.status(500).json();
      });
  },

  editDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    // console.log(req.params);

    const { id } = req.params;
    dbInstance
      .edit_donut([newtoppingid, donutid, oldtoppingid])
      .then(() => {
        res.status(200).json();
      })
      .catch(e => {
        console.log(e);
      });
  },
  addTopping: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { donut_id, topping1 } = req;

    dbInstance
      .add_topping([donut_id, topping_id])
      .then(topping => {
        console.log(topping);
        res.status(200).json(topping);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
