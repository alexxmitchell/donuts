module.exports = {
  getBag: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
  }
};
