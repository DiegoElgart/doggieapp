/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "friendship",
    {
      userId1: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        field: "user_id_1",
      },
      userId2: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        field: "user_id_2",
      },
    },
    {
      tableName: "friendship",
    }
  );
};
