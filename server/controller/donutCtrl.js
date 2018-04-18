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
    const { kind, price, boxid } = req.body;
    const { users_id } = req.user;

    dbInstance
      .add_donut([users_id, kind, price, boxid])
      .then(() => {
        res.status(200).json();
      })
      .catch(e => {
        console.log(e);
        // res.status(500).json();
      });
  },

  editDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.params);

    const { id } = req.params;
    dbInstance
      .edit_donut([newtoppingid, donutid, oldtoppingid])
      .then(() => {
        res.status(200).json();
      })
      .catch(e => {
        console.log(e);
      });
  }
};
