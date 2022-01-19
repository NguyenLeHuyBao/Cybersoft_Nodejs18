const Errors = {
  BadRequest: "Bad request",
  BadCredential: "Invalid Email or Password",
};

const defaultPass = "123456";

const Success = {
  Login: "Successfully Login",
  SignUp: "Successfully Sign Up",
  ResetPassword: "Successfully Reset Password",
  EmailSending: "Successfully Sent Email",
};
const constants = {
  Errors,
  Success,
  defaultPass,
};

module.exports = {
  constants,
};
