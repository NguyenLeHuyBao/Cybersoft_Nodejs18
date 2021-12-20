const { User } = require("../models");

const createNewUserIfNotExist = async (profile) => {
  let loginUser = {};
  const payload = {
    name: profile.displayName,
    email: profile.emails[0].value,
    avatar: profile.photos[0].value,
  };
  const foundedUser = await User.findOne({
    where: {
      email: payload.email,
    },
  });
  if (foundedUser) {
    loginUser = foundedUser;
  } else {
    loginUser = await User.create(payload);
  }
  return loginUser;
};

module.exports = {
  createNewUserIfNotExist,
};
