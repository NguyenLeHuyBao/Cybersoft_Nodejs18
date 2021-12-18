const bcryptjs = require("bcryptjs");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const { hashPassGenerate } = require("../utils/hashPassGenerate");
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
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 12 });
    res.status(200).send({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const hashPassword = hashPassGenerate(password);
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

const facebookLogin = async (req, res) => {
  try {
    let loginUser = {};
    const { user } = req;
    const payload = {
      name: user.displayName,
      email: user.emails[0].value,
      avatar: user.photos[0].value,
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
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 12 });
    res
      .status(201)
      .send({ message: "Facebook Login successful", loginUser, token });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const emailSending = async (req, res) => {
  try {
    const { email, subject, text } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email, // Change to your recipient
      from: process.env.SENDGRID_VERIRY_SENDER, // Change to your verified sender
      subject,
      text,
    };
    await sgMail.send(msg);
    res.status(200).send({ message: `Succesfully sent email to ${email}` });
  } catch (error) {
    res.status(500).send({ error });
  }
};
module.exports = {
  signIn,
  signUp,
  resetPassword,
  facebookLogin,
  emailSending,
};
