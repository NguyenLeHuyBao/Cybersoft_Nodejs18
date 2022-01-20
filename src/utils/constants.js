const Errors = {
  BadRequest: "Bad request",
  BadCredential: "Invalid Email or Password",
  ExistedData: "Data already existed",
  InvalidId: "Invalid Id",
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
  UpcomingMovies: "Successfully get Upcoming movies",
  CurrentMovies: "Successfully get Current movies",
  SpecialMovies: "Successfully get Special movies",
  SeatsByShowtime: "Successfully get list seats by showtime",
};
const constants = {
  Errors,
  Success,
  defaultPass,
};

module.exports = {
  constants,
};
