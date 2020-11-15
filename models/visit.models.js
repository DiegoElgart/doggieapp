module.exports = (sequelize, Sequelize) => {
  const Visit = sequelize.define(
    "visits",
    {
      visitId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "visit_id",
      },
      parkId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "parks",
          key: "park_id",
        },
        field: "park_id",
      },
      guestId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "dogs",
          key: "dog_id",
        },
        field: "guest_id",
      },
      startAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "start_at",
      },
      endAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "end_at",
      },
    },
    {
      tableName: "visits",
    }
  );
  return Visit;
};
