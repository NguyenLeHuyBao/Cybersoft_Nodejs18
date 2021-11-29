"use strict";
const bcryptjs = require("bcryptjs");
const fakeUserList = [
  {
    name: "Bao Nguyen",
    email: "baonguyen@gmail.com",
    password: "123456",
    phone: "0991974671",
    role: "CLIENT",
    createdAt: "2021-11-19 11:36:14",
    updatedAt: "2021-11-19 11:36:14",
    avatar: "link hinh",
  },
  {
    name: "S1mple",
    email: "s1m@gmail.com",
    password: "123456",
    phone: "096201000094",
    role: "ADMIN",
    createdAt: "2021-11-19 11:36:14",
    updatedAt: "2021-11-19 11:36:14",
    avatar: "link hinh",
  },
  {
    name: "b1t",
    email: "b1t@gmail.com",
    password: "123456",
    phone: "0945261092",
    role: "CLIENT",
    createdAt: "2021-11-19 11:36:14",
    updatedAt: "2021-11-19 11:36:14",
    avatar: "link hinh",
  },
];

const createFakeUser = (listUser) => {
  const fakeUserData = [];
  listUser.forEach((item, index) => {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(item.password, salt);
    fakeUserData.push({ ...item, password: hashPassword });
  });
  return fakeUserData;
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", createFakeUser(fakeUserList), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
