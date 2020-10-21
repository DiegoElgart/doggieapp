module.exports = (sequelize, Sequelize) => {
  const UserDog = sequelize.define(
    "user_dog",
    {
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: "createdAt",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: "updatedAt",
      },
      dogPetId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "dogs",
          key: "dog_id",
        },
        field: "dog_pet_id",
      },
      ownerId: {
        type: Sequelize.INTEGER(11),
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
  return UserDog;
};
