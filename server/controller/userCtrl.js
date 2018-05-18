module.exports = {
  updateUser: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("req.body:", req.body);
    const { name, email, address, city, st, zip } = req.body;

    dbInstance
      .update_user([req.user.id, name, email, address, city, st, zip])
      .then(() => {
        // console.log("updated:", updated);
        res.status(200).json();
      })
      .catch(e => {
        console.log(e);
      });
  }
};
