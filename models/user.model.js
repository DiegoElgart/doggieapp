const Joi = require("joi");
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  // TODO validation not working here

  function validateUser(user) {
    const schema = Joi.object({
      first_name: Joi.string().min(2).max(255).required(),
      last_name: Joi.string().min(2).max(255).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(6).max(255).required(),
    });
  }
  return User;
};
