const { sequelize } = require("../models");
const db = require("../models");
const User = db.user;
const Dog = db.dog;

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
  ``;
};
exports.getDog = async (req, res) => {
  const dog = Dog.findAll({
    include: [
      {
        model: User,
        as: "pets",
        where: { userId: req.id },
      },
    ],
  })
    .then(dog => {
      res.send(dog);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  return dog;
};
