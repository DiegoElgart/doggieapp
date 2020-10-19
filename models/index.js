const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  port: config.PORT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.dog = require("../models/dog.model.js")(sequelize, Sequelize);

db.dog.belongsToMany(db.user, {
  through: "user_dog",
  as: "pets",
  foreignKey: "dog_pet_id",
});
db.user.belongsToMany(db.dog, {
  through: "user_dog",
  as: "owners",
  foreignKey: "owner_id",
});

module.exports = db;
