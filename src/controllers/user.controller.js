const { User } = require("../models/");
const bcryptjs = require("bcryptjs");
const { config } = require("../config");
const jwt = require("jsonwebtoken");

const findAllUser = async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findDetailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetail = await User.findByPk(id);
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

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
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, role } = req.body;
    await User.update(
      { name, email, phone, role },
      {
        where: {
          id,
        },
      }
    );
    const detailUser = await User.findByPk(id);
    if (detailUser) {
      const payload = {
        id: detailUser.id,
        email: detailUser.email,
        role: detailUser.role,
      };
      const secretKey = "fake-secret";
      const token = jwt.sign(payload, secretKey);
      res.status(200).send({ detailUser, token });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await User.findByPk(id);
    await User.destroy({
      where: { id },
    });
    res.status(200).send({ message: "Xóa thành công", userDelete });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

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
