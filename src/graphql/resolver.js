const { User } = require("../models");

const graphqlResolvers = {
  async user({ id }) {
    const userDetail = await User.findByPk(id);
    // return {
    //   id: 1,
    //   name: "Bao",
    //   email: "bao@gmail.com",
    //   password: "123456",
    //   phone: "091239993299",
    //   role: "ADMIN",
    //   avatar: "link hinh",
    // };
    return userDetail;
  },
  async users() {
    return await User.findAll();
  },

  async createUser({ newUser }) {
    const user = await User.createUser(newUser);
    return user;
  },
  async updateUser({ user, id }) {
    await User.update(user, {
      where: {
        id,
      },
    });
    const userUpdate = await User.findByPk(id);
    return userUpdate;
  },
};

module.exports = {
  graphqlResolvers,
};
