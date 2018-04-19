module.exports = {
  createBox: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.user);
    const { id } = req.user;

    dbInstance
      .create_box(id)
      .then(() => {
        res.status(200).json();
      })
      .catch(e => console.log(e));
  },
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
