const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 9),
  })
    .then(() => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not Found" });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      let token = jwt.sign({ id: user.user_id }, config.secret);

      res.status(200).send({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        accessToken: token,
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
