module.exports = (sequelize, Sequelize) => {
  const Park = sequelize.define(
    "parks",
    {
      parkId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "park_id",
      },
      parkName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "park_name",
      },
      parkAddress: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "park_address",
      },
    },
    {
      tableName: "parks",
    }
  );
  return Park;
};
