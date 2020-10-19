const Joi = require("joi");

module.exports = (sequelize, Sequelize) => {
  const Dog = sequelize.define("dogs", {
    dog_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    dog_name: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.BOOLEAN,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    weight: {
      type: Sequelize.INTEGER,
    },
    neutered: {
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  // TODO validation not working here
  function validateDog(dog) {
    const schema = Joi.object({
      dog_name: Joi.string().min(2).max(2).required(),
      sex: Joi.boolean(),
      age: Joi.number(),
      weight: Joi.number(),
      neutered: Joi.boolean(),
    });
  }

  return Dog;
};
