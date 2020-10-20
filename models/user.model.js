module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "user_id",
      },
      firstName: {
        type: Sequelize.STRING(255),

        field: "first_name",
        validate: {
          min: 2,
          max: 255,
        },
      },
      lastName: {
        type: Sequelize.STRING(255),

        field: "last_name",
        validate: {
          min: 2,
          max: 255,
        },
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "email",
        validate: {
          isEmail: true,
          min: 6,
          max: 255,
        },
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "password",
      },
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
    },
    {
      tableName: "users",
    }
  );

  return User;
};
