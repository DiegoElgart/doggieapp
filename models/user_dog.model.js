/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "userDog",
    {
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updatedAt",
      },
      dogPetId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "dogs",
          key: "dog_id",
        },
        field: "dog_pet_id",
      },
      ownerId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "user_id",
        },
        field: "owner_id",
      },
    },
    {
      tableName: "user_dog",
    }
  );
};
