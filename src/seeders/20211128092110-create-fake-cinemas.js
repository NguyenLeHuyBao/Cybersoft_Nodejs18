"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cinemas",
      [
        {
          id: 1,
          name: "BDH 3/2",
          address: "159 đường 3/2 quận 10 tphcm",
          image: "hinh rap",
          cineplexId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 2,
          name: "BDH Cao Thắng",
          address: "102 đường cao thắng quận 3 tphcm",
          image: "hinh rap",
          cineplexId: 1,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
        {
          id: 3,
          name: "CGV Phạm Ngũ Lão",
          address: "79 đường phạm ngũ lão quận 1 tphcm",
          image: "hinh rap",
          cineplexId: 2,
          createdAt: "2021-11-19 11:36:14",
          updatedAt: "2021-11-19 11:36:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
