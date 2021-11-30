"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          userId: 7,
          movieId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          userId: 9,
          movieId: 2,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
