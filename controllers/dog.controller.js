const db = require("../models");
const Dog = db.dog;

exports.addDog = (req, res) => {
  Dog.create({
    dogName: req.body.dogName,
    sex: req.body.sex,
    age: req.body.age,
    weight: req.body.weight,
    neutered: req.body.neutered,
  })
    .then(() => {
      res.send({ message: "Dog registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.checkIfDogExists = (req, res) => {
  Dog.findOne({
    where: {
      dogName: req.body.dogName,
      age: req.body.age,
    },
  }).then(dog => {
    if (dog) {
      res.status(400).send({ message: "Dog already registered!" });
      return;
    }
  });
};
