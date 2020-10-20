module.exports = (sequelize, Sequelize) => {
  const Dog = sequelize.define(
    "dogs",
    {
      dogId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "dog_id",
      },
      dogName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: "dog_name",
      },
      sex: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
        field: "sex",
      },
      age: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        field: "age",
      },
      weight: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        field: "weight",
      },
      neutered: {
        type: Sequelize.INTEGER(1),
        allowNull: true,
        field: "neutered",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "createdAt",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "updatedAt",
      },
    },
    {
      tableName: "dogs",
    }
  );

  return Dog;
};
