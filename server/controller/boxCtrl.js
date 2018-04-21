module.exports = {
  createBox: (req, res) => {
    const dbInstance = req.app.get("db");

    const { id } = req.user;

    dbInstance
      .create_box(id)
      .then(() => {
        res.status(200).json();
      })
      .catch(e => console.log(e));
  },
  // getDon: (req, res) => {
  //   const dbInstance = req.app.get("db");
  //   const { id } = req.user;

  //   dbInstance
  //     .get_don_byuser([id])
  //     .then(box => {
  //       res.status(200).json(box);
  //     })
  //     .catch(() => {
  //       res.status(500).json();
  //     });
  // },

  addToBox: (req, res) => {
    const dbInstance = req.app.get("db");
    const { box_id, id } = req.body;

    dbInstance
      .add_to_box([box_id, id])
      .then(resp => {
        console.log(resp);
        res.status(200).json(resp);
      })
      .catch(() => {
        res.status(500).json();
      });
  }
};
