module.exports = {
  getBox: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.user;

    dbInstance
      .get_box([id])
      .then(box => {
        res.status(200).json(box);
      })
      .catch(() => {
        res.status(500).json();
      });
  },
  removeDonut: (req, res) => {
    const dbInstance = req.app.get("db");
    const { users_id, id } = req.params;
    console.log(req.params.id);
    dbInstance
      .delete_donut([id])
      .then(() => {
        res.status(200).json();
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  addToBox: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.user;
    // const { price, donutid } = req.body;
    console.log(id);

    dbInstance
      .add_to_box([id])
      .then(() => {
        res.status(200).json();
      })
      .catch(() => {
        res.status(500).json();
      });
  }
};
