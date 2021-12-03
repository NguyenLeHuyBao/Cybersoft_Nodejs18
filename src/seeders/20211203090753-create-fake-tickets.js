"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          id: 1,
          userId: 1,
          movieId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 2,
          userId: 1,
          movieId: 2,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 3,
          userId: 2,
          movieId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 4,
          userId: 3,
          movieId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 5,
          userId: 3,
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
