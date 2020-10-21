const db = require("../models");
const UserDog = db.userDog;

exports.addDogtoUser = (req, res) => {
  UserDog.create({
    dogPetId: req.body.dogPetId,
    ownerId: req.body.ownerId,
  })
    .then(() => {
      res.send({ message: "Dog added to" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};