const db = require("../models");
const UserDog = db.userDog;

// Use to add another owner to an existent dog

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
