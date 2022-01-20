const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

const { User } = require("../models");

const { constants } = require("../utils/constants");

const signIn = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw new Error(constants.Errors.BadCredential);

  const isAuth = bcryptjs.compareSync(password, user.password);

  if (!isAuth) throw new Error(constants.Errors.BadCredential);

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 12 });

  return token;
};

const signUp = async (name, email, password, phone) => {
  const newUser = await User.create({
    name,
    email,
    password,
    phone,
  });

  if (!newUser) throw new Error(constants.Errors.BadRequest);

  return newUser;
};

const resetPassword = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw new Error(constants.Errors.BadRequest);

  await User.update({ password: constants.defaultPass }, { where: { email } });
};

const emailSending = async (email, subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: process.env.SENDGRID_VERIRY_SENDER, // Change to your verified sender
    subject,
    text,
  };
  await sgMail.send(msg);
};

const thirdPartyLoginController = async (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const payload = {
    id: user.dataValues.id,
    role: user.dataValues.role,
    email: user.dataValues.email,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 12 });

  return token;
};

const authService = {
  signIn,
  signUp,
  resetPassword,
  emailSending,
  thirdPartyLoginController,
};

module.exports = {
  authService,
};
