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
  GetAllTask: "Get All Task Complete",
  GetDetailTask: "Get Detail Task Complete",
  DeleteTask: "Delete Task Complete",
  UploadTask: "Upload Task Complete",
  UpdateTask: "Update Task Complete",
  UploadImage: "Successfully Upload Image ",
};
const constants = {
  Errors,
  Success,
  defaultPass,
};

module.exports = {
  constants,
};
