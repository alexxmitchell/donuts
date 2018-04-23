module.exports = {
  createBox: (req, res) => {
    const dbInstance = req.app.get("db");

    const { id } = req.user;

    dbInstance
      .create_box(id)
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(e => console.log(e));
  },

  addToBox: (req, res) => {
    const dbInstance = req.app.get("db");
    const { box_id } = req.body;
    const { don_id } = req.params;

    dbInstance
      .add_to_box([box_id, don_id])
      .then(resp => {
        console.log(resp);
        res.status(200).json(resp);
      })
      .catch(() => {
        res.status(500).json();
      });
  },
  getBox: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.user;

    dbInstance
      .get_box([id])
      .then(myBox => {
        res.status(200).json(myBox);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
