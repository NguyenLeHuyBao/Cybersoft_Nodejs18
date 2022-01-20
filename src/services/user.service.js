const { User } = require("../models");

const { cloudinary } = require("../utils/cloudinary");
const { constants } = require("../utils/constants");

const createUser = async (body) => {
  const { email } = body;

  const existedUser = await User.findOne({ where: { email } });
  if (existedUser) throw new Error(constants.Errors.ExistedData);

  const result = await User.create(body);

  return result;
};

const uploadAvatar = async (user, file) => {
  const result = await cloudinary.uploader.upload(file.path, {
    use_filename: true,
    folder: `/Cybersoft_Nodejs18/${file.fieldname}`,
  });

  if (!result) throw new Error(constants.Errors.BadRequest);

  const userUploadImage = await User.findOne({
    where: {
      id: user.id,
    },
  });

  if (!userUploadImage) throw new Error(constants.Errors.BadRequest);

  userUploadImage.avatar = result.url;
  await userUploadImage.save();

  return { userUploadImage, result };
};

const userService = {
  uploadAvatar,
  createUser,
};

module.exports = {
  userService,
};
