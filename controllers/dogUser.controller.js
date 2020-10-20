const db = require("../models");
const userDog = db.user_dog;

exports.addDogtoUser = (req, res) => {
  userDog
    .create({
      dogPetId: req.body.dogPetId,
      onwerId: req.body.onwerId,
    })
    .then(() => {
      res.send({ message: `Dog added to ${onwerId}` });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
