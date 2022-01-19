const { Router } = require("express");

const passport = require("passport");
const facebookStrategy = require("passport-facebook-token");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const { createNewUserIfNotExist } = require("../utils/createNewUserIfNotExist");

const {
  signIn,
  signUp,
  resetPassword,
  emailSending,
  thirdPartyLoginController,
} = require("../controllers/auth.controller");

const authRouter = Router();

// http://localhost:7000/api/v1/auth/facebook-login
passport.use(
  "fb-login",
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      const loginUser = await createNewUserIfNotExist(profile);
      return done(null, loginUser);
    }
  )
);

authRouter.post(
  "/facebook-login",
  passport.authenticate("fb-login", {
    session: false,
  }),
  thirdPartyLoginController
);

// http://localhost:7000/api/v1/auth/google-login
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const loginUser = await createNewUserIfNotExist(profile);
      return done(null, loginUser);
    }
  )
);

authRouter.get(
  "/google-login",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

authRouter.get(
  "/google-login/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/v1/auth/failed",
    session: false,
  }),
  thirdPartyLoginController,
  async (req, res) => {
    res.redirect("/api/v1/auth/success");
  }
);

authRouter.get("/success", async (req, res) => {
  res.send("successfully log in");
});

authRouter.get("/failed", async (req, res) => {
  res.status(404).send("error authentification");
});

// POST http://localhost:7000/api/v1/auth/email-sending
authRouter.post("/email-sending", emailSending);

// POST http://localhost:7000/api/v1/auth/sign-in
authRouter.post("/sign-in", signIn);

// POST http://localhost:7000/api/v1/auth/sign-up
authRouter.post("/sign-up", signUp);

// POST http://localhost:7000/api/v1/auth/reset-password
authRouter.post("/reset-password", resetPassword);

module.exports = {
  authRouter,
};
