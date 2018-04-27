const axios = require("axios");

module.exports = {
  getMap: (req, res, next) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/staticmap?center=32.777638,-96.795510&zoom=12&size=400x400&markers=color=0x735b69%7C32.777638,-96.795510&key=${
          process.env.REACT_APP_MAP_KEY
        }`
      )
      .then(map => {
        console.log("success:", map);
        res.status(200).json(JSON.stringify(map));
      })
      .catch(e => console.log(e));
  }
};

// Coordinates
// 32.777638, -96.795510
