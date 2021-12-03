"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          id: 1,
          name: "Iron man 1",
          alias: "Iron man 1",
          poster: "link hinh",
          trailer: "link video",
          duration: "180",
          desc: "phim có người sắt , giàu lắm",
          dateShow: "2021-11-19",
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 2,
          name: "Iron man 2",
          alias: "Iron man 2",
          poster: "link hinh",
          trailer: "link video",
          duration: "180",
          desc: "phim có người sắt , giàu lắm phan 2",
          dateShow: "2021-11-19",
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
