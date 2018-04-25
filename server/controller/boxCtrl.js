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
    console.log("params:", req.params);

    const { box_id, don_id } = req.params;

    dbInstance
      .add_to_box([Number(box_id), Number(don_id)])
      .then(boxy => {
        res.status(200).json(boxy);
      })
      .catch(() => {
        res.status(500).json();
      });
  },
  getBox: (req, res) => {
    const dbInstance = req.app.get("db");

    const { box_id } = req.params;

    dbInstance
      .get_box([box_id])
      .then(myBox => {
        console.log("myBox:", myBox);
        res.status(200).json(myBox);
      })
      .catch(e => {
        console.log(e);
      });
  },
  boxToppings: (req, res) => {
    const dbInstance = req.app.get("db");
    const { donut_id } = req.body;
    dbInstance
      .box_toppings([donut_id])
      .then(boxTops => {
        console.log("boxTops:", boxTops);
        res.status(200).json(boxTops);
      })
      .catch(e => {
        console.log(e);
      });
  },
  boxTotal: (req, res) => {
    const dbInstance = req.app.get("db");
    const { box_id } = req.params;
    dbInstance
      .box_total([box_id])
      .then(total => {
        console.log(total);
        res.status(200).json(total);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
