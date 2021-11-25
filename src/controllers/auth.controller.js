const bcryptjs = require("bcryptjs");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const isAuth = bcryptjs.compareSync(password, user.password);
      if (isAuth) {
        const payload = {
          id: user.id,
          email: user.email,
          role: user.role,
        };
        const secretKey = "fake-secret";
        const token = jwt.sign(payload, secretKey);
        res.status(200).send({ message: "Đăng nhập thành công", token });
      } else {
        res.status(400).send({ message: "Mật khẩu không đúng" });
      }
    } else {
      res.status(404).send({ message: "Email không đúng" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    console.log(name, email, password, phone);
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const passwordDefault = "123456";
      const salt = bcryptjs.genSaltSync(10);
      const hashPassword = bcryptjs.hashSync(passwordDefault, salt);
      await User.update({ password: hashPassword }, { where: { email } });
      res.status(200).send({
        message: `Reset thành công, mật khẩu mới là: ${passwordDefault}`,
      });
    } else {
      res.status(404).send({ message: "Email không đúng" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  signIn,
  signUp,
  resetPassword,
};
