const { User } = require("../models/");

const { adminTaskHelper } = require("../services/common.service");
const { userService } = require("../services/user.service");

const { constants } = require("../utils/constants");

const findAllUser = adminTaskHelper.getAllTask(User);

const findDetailUser = adminTaskHelper.getDetailTask(User);

const createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    res.status(201).send({ message: constants.Success.UploadTask, result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = adminTaskHelper.updateTask(User);

const removeUser = adminTaskHelper.deleteTask(User);

const uploadAvatar = async (req, res) => {
  try {
    const { user, file } = req;
    const { userUploadImage, result } = await userService.uploadAvatar(
      user,
      file
    );
    res.status(200).send({
      message: constants.Success.UploadImage,
      userUploadImage,
      result,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  findAllUser,
  findDetailUser,
  createUser,
  updateUser,
  removeUser,
  uploadAvatar,
};
