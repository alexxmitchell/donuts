module.exports = {
  getDonuts: (req, res) => {
    const dbInstance = req.app.get("db");

    const { id } = req.user;

    dbInstance
      .get_donuts([id])
      .then(donuts => {
        res.status(200).json(donuts);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  addDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    const { kind } = req.body;
    const { id } = req.user;

    dbInstance
      .add_donut([id, kind])
      .then(resp => {
        res.status(200).json(resp[0]);
      })
      .catch(e => {
        console.log(e);
      });
  },

  removeTopping: (req, res) => {
    const dbInstance = req.app.get("db");
    const { donut_id, topping_id } = req.params;

    dbInstance
      .remove_topping([donut_id, topping_id])
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(e => console.log(e));
  },

  deleteDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_donut([req.user.id, req.params.donut_id, req.params.boxid])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(e => {
        console.log(e);
      });
  },
  addTopping: (req, res) => {
    const dbInstance = req.app.get("db");

    const { id, topping } = req.body;

    dbInstance
      .add_topping([id, topping])
      .then(top => {
        res.status(200).json(top);
      })
      .catch(e => {
        console.log(e);
      });
  },
  getAllToppings: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_toppings()
      .then(toppings => {
        res.status(200).json(toppings);
      })
      .catch(e => {
        console.log(e);
      });
  },
  getDoTop: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .get_a_donut([id])
      .then(donut => {
        res.status(200).json(donut);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
