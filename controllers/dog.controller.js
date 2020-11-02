const db = require("../models");
const Dog = db.dog;
const UserDog = db.userDog;

exports.addDogIfNotExists = (req, res) => {
  Dog.findOne({
    where: {
      dogName: req.body.dogName,
      age: req.body.age,
    },
  }).then(dog => {
    if (dog) {
      res.status(400).send({ message: "Dog already registered!" });
    } else {
      Dog.create({
        dogName: req.body.dogName,
        sex: req.body.sex,
        age: req.body.age,
        weight: req.body.weight,
        neutered: req.body.neutered,
      })
        .then(dog => {
          UserDog.create({
            dogPetId: dog.dataValues.dogId,
            ownerId: req.id,
          })
            .then(() => {
              res.send({ message: "Dog created and added to" });
            })
            .catch(err => {
              res.status(500).send({ message: err.message });
            });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    }
  });
};
