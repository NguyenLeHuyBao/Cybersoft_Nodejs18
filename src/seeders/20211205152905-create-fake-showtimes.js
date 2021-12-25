"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Showtimes",
      [
        {
          id: 1,
          startTime: "2021-06-19 15:22:16",
          cinemaId: 1,
          movieId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 2,
          startTime: "2021-06-22 01:59:48",
          cinemaId: 2,
          movieId: 2,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: "3",
          startTime: "2021-02-06 08:39:02",
          cinemaId: 3,
          movieId: 2,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};
