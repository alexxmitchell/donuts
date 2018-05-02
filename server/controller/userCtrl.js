module.exports = {
  updateUser: (req, res) => {
    const dbInstance = req.app.get("db");
    const {
      name,
      email,
      address_line_1,
      address_line_2,
      city,
      st,
      zip
    } = req.body;
    console.log(dbInstance);
    dbInstance
      .update_user([
        req.user.id,
        name,
        email,
        address_line_1,
        address_line_2,
        city,
        st,
        zip
      ])
      .then(updated => {
        console.log("updated:", updated);
        res.status(200).json(updated);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
