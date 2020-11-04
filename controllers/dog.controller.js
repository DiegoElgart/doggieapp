const { sequelize } = require("../models");
const db = require("../models");
const User = db.user;
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
  ``;
};
exports.getDog = async (req, res) => {
  const dog = await Dog.findAll({
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

exports.deleteDog = (req, res) => {
  const id = req.params.id;
  Dog.destroy({
    where: { dogId: id },
  })
    .then(dog => {
      res.send({ message: "Doggie was deleted" });
    })
    .catch(err => {
      res.status(500).send({ meesage: err.meesage });
    });
};

exports.editDog = async (req, res) => {
  const id = req.params.id;
  // await Dog.findOne({ where: { dogId: id } }).then(() => {
  Dog.update(req.body, {
    where: { dogId: id },
    dogName: req.body.dogName,
    sex: req.body.sex,
    age: req.body.age,
    weight: req.body.weight,
    neutered: req.body.neutered,
  })
    .then(dog => {
      if (dog == 1) {
        res.send({ message: "Dog updated succesfully" });
      } else {
        res.send({ message: "Cannot update Doggie" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.meesage });
    });
  // });
};
exports.getDogById = async (req, res) => {
  const dog = await Dog.findAll({
    where: { dogId: req.params.id },
  })
    .then(dog => {
      res.send(dog);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  return dog;
};
