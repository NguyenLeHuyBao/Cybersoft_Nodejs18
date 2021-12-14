"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          title: "John Doe",
          description:
            "John doe is an intellighent human being known for his sense of humour",
          newsImg: "link hinh",
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          title: "Viet Nam beats Maylaysia in the Aff cup 2020",
          description:
            "Viet Nam is the former champion of Aff cup and still proves that they are the only one who deserves the crowd",
          newsImg: "link hinh",
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("News", null, {});
  },
};
