const { User } = require("../models/");
const { config } = require("../config");
const { adminTaskHelper } = require("../services/common.service");
const { cloudinary } = require("../utils/cloudinary");

const findAllUser = adminTaskHelper.getAllTask(User);

const findDetailUser = adminTaskHelper.getDetailTask(User);

const createUser = adminTaskHelper.uploadTask(User);

const updateUser = adminTaskHelper.updateTask(User);

const removeUser = adminTaskHelper.deleteTask(User);

const uploadAvatar = async (req, res) => {
  try {
    const { user, file } = req;
    const result = await cloudinary.uploader.upload(file.path, {
      use_filename: true,
      folder: `/Cybersoft_Nodejs18/${file.fieldname}`,
    });
    const userUploadImage = await User.findOne({
      where: {
        id: user.id,
      },
    });
    userUploadImage.avatar = result.url;
    await userUploadImage.save();
    res.status(200).send({
      message: "Sucucessfully upload avatar",
      userUploadImage,
      result,
    });
  } catch (error) {
    res.status(500).send(error);
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
