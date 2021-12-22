"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Cinemas", "cineplexId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Cineplexes",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Cinemas", "cineplexId");
  },
};
