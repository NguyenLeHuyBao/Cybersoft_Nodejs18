"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookedSeats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      seatId: {
        type: Sequelize.INTEGER,
        references: {
          model: "seats",
          key: "id",
        },
      },
      showtimeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "showtimes",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookedSeats");
  },
};
