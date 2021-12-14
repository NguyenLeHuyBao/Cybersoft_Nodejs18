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
    if (!user) res.status(404).send({ message: "Email không đúng" });
    const isAuth = bcryptjs.compareSync(password, user.password);
    if (!isAuth) res.status(400).send({ message: "Mật khẩu không đúng" });
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const secretKey = "fake-secret";
    const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 12 });
    res.status(200).send({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
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
    if (!user) res.status(404).send({ message: "Email không đúng" });
    const passwordDefault = "123456";
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(passwordDefault, salt);
    await User.update({ password: hashPassword }, { where: { email } });
    res.status(200).send({
      message: `Reset thành công, mật khẩu mới là: ${passwordDefault}`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  signIn,
  signUp,
  resetPassword,
};
