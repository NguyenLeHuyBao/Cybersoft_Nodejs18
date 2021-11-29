"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cineplexes",
      [
        {
          id: 1,
          name: "BHD",
          logo: "hinh logo",
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 2,
          name: "CGV",
          logo: "hinh logo",
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cineplexes", null, {});
  },
};
