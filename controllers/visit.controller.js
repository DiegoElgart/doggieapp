const db = require("../models");
const Visit = db.visit;

exports.newVisit = (req, res) => {
  Visit.create({
    parkId: req.body.parkId,
    guestId: req.body.guestId,
    startAt: req.body.startAt,
    endAt: req.body.endAt,
  })
    .then(() => {
      res.send({ message: "Visit Scheduled succesfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.allVisits = (req, res) => {
  Visit.findAll({ where: { parkId: req.body.parkId } })
    .then(visits => {
      res.send(visits);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
