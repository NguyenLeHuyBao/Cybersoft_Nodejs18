const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

const { User } = require("../models");

const { constants } = require("../utils/constants");
const { authService } = require("../services/auth.service");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.signIn(email, password);
    res.status(200).send({ message: constants.Success.Login, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const newUser = await authService.signUp(name, email, password, phone);
    res.status(201).send({ message: constants.Success.SignUp, newUser });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    await authService.resetPassword(email);
    res.status(200).send({
      message: constants.Success.ResetPassword,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const thirdPartyLoginController = async (req, res) => {
  try {
    const { user } = req;
    const token = await authService.thirdPartyLoginController(user);
    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const emailSending = async (req, res) => {
  try {
    const { email, subject, text } = req.body;
    await authService.emailSending(email, subject, text);
    res.status(200).send({ message: constants.Success.EmailSending });
  } catch (error) {
    res.status(500).send({ error });
  }
};
module.exports = {
  signIn,
  signUp,
  resetPassword,
  thirdPartyLoginController,
  emailSending,
};
