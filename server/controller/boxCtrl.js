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

    const { box_id, id } = req.params;
    console.log("box_id and id:", box_id, id);
    dbInstance
      .add_to_box([box_id, id])
      .then(boxy => {
        console.log("boxy:", boxy);
        // res.status(200).json();
        res.status(200).json(boxy);
      })
      .catch(e => {
        console.log(e);
      });
  },
  getBox: (req, res) => {
    const dbInstance = req.app.get("db");

    const { box_id } = req.params;

    dbInstance
      .get_box([box_id])
      .then(myBox => {
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
    console.log("box_id:", box_id);
    dbInstance
      .box_total([box_id])
      .then(total => {
        console.log(total);
        res.status(200).json(total);
      })
      .catch(e => {
        console.log(e);
      });
  },
  previousBoxes: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.user;

    dbInstance
      .previous_boxes([id])
      .then(oldboxes => {
        console.log(oldboxes);
        res.status(200).json(oldboxes);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
