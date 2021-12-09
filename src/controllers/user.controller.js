const { User } = require("../models/");
const bcryptjs = require("bcryptjs");
const { config } = require("../config");
const { adminTaskHelper } = require("../utils/CRUD");

const findAllUser = adminTaskHelper.getAllTask(User);

const findDetailUser = adminTaskHelper.getDetailTask(User);

const createUser = adminTaskHelper.uploadTask(User);

const updateUser = adminTaskHelper.updateTask(User);

const removeUser = adminTaskHelper.deleteTask(User);

const uploadAvatar = async (req, res) => {
  const { user, file } = req;
  const userUploadImage = await User.findOne({
    where: {
      id: user.id,
    },
  });

  userUploadImage.avatar = config.server.host + file.path;
  await userUploadImage.save();
  res.send({ user, link: userUploadImage.avatar });
};

module.exports = {
  findAllUser,
  findDetailUser,
  createUser,
  updateUser,
  removeUser,
  uploadAvatar,
};
