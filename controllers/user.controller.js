const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.getUserName = (req, res) => {
  User.findOne({
    where: { userId: req.params.id },
  })
    .then(user => {
      res.send(user.firstName);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  return User;
};
