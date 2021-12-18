const { Router } = require("express");
const passport = require("passport");
const {
  signIn,
  signUp,
  resetPassword,
  facebookLogin,
  emailSending,
} = require("../controllers/auth.controller");
const authRouter = Router();
// http://localhost:7000/api/v1/auth/facebook-login
authRouter.post(
  "/facebook-login",
  passport.authenticate("fb-login", {
    session: false,
  }),
  facebookLogin
);

// http://localhost:7000/api/v1/auth/email-sending
authRouter.post("/email-sending", emailSending);
// http://localhost:7000/api/v1/auth/sign-in
authRouter.post("/sign-in", signIn);
// http://localhost:7000/api/v1/auth/sign-up
authRouter.post("/sign-up", signUp);
// http://localhost:7000/api/v1/auth/reset-password
authRouter.post("/reset-password", resetPassword);

module.exports = {
  authRouter,
};
