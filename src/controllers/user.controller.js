const { User } = require("../models/");
const bcryptjs = require("bcryptjs");
const { config } = require("../config");
const { adminTaskHelper } = require("../utils/CRUD");

const findAllUser = adminTaskHelper.getAllTask(User);

const findDetailUser = adminTaskHelper.getDetailTask(User);

const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      role,
    });
    res.status(201).send({ message: "Successfully create new user", newUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, password, email, role } = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    await User.update(
      { name, email, phone, role, password: hashPassword },
      {
        where: {
          id,
        },
      }
    );
    const detailUser = await User.findByPk(id);
    res.status(200).send(detailUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

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
