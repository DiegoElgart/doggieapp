const { Sequelize } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Park = sequelize.define("parks", {
    park_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    park_name: {
      type: Sequelize.STRING,
    },
    park_address: {
      type: Sequelize.STRING,
    },
  });
};
