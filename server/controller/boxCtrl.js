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
    const { userid, donutid } = req.user;

    dbInstance
      .delete_donut([userid, donutid])
      .then(() => {
        res.status(200).json();
      })
      .catch(() => {
        res.status(500).json();
      });
  }
};
