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
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "email",
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
