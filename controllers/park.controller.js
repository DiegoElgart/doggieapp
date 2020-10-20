const db = require("../models");
const Park = db.park;

exports.newPark = (req, res) => {
  Park.create({
    parkName: req.body.parkName,
    parkAddress: req.body.parkAddress,
  })
    .then(() => {
      res.send({ message: "Park added succesfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.allParks = (req, res) => {
  Park.findAll().then(park => {
    res.send(park).catch(err => {
      res.status(500).send({ message: err.message });
    });
  });
};
