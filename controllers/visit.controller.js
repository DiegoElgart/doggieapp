const db = require("../models");
const Visit = db.visit;

exports.newVisit = (req, res) => {
  const startAt = req.body.day + "T" + req.body.startAt + ":00.000Z";
  const endAt = req.body.day + "T" + req.body.endAt + ":00.000Z";
  Visit.findOne({
    where: {
      guestId: req.body.dogId,
      startAt: startAt,
    },
  }).then(visit => {
    if (visit) {
      res
        .status(400)
        .send({ message: "Visit at this time already registered!" });
    } else {
      Visit.create({
        parkId: req.body.parkId,
        guestId: req.body.dogId,
        startAt: startAt,
        endAt: endAt,
      })
        .then(() => {
          res.send({ message: "Visit Scheduled succesfully!" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    }
  });
};
exports.allVisits = async (req, res) => {
  await db.sequelize
    .query(
      "SELECT  v.*, d.dog_name, p.park_name FROM visits v, parks p, dogs d WHERE v.park_id = p.park_id AND v.guest_id=d.dog_id AND p.park_id = $1",
      {
        bind: [req.params.id],
        type: db.sequelize.SELECT,
      }
    )
    .then(visits => {
      res.send(visits[0]);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  // Visit.findAll({ where: { parkId: req.params.id } })
  //   .then(visits => {
  //     res.send(visits);
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: err.message });
  //   });
};

exports.visitsGroupByHour = async (req, res) => {
  await db.sequelize
    .query(
      `SELECT v.start_at AS start, v.end_at AS end, v.park_id, p.park_name, GROUP_CONCAT(COALESCE(d.dog_name,'') SEPARATOR ', ') AS dogs_groupby_hour
  FROM visits v
 INNER JOIN parks p ON v.park_id=p.park_id
 INNER JOIN dogs d ON v.guest_id=d.dog_id
 WHERE v.park_id=$1
 GROUP BY start_at, end_at, park_id`,
      {
        bind: [req.params.id],
        type: db.sequelize.SELECT,
      }
    )
    .then(visits => {
      res.send(visits[0]);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
