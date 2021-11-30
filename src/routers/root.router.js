const { Router } = require("express");
const rootRoutter = Router();
const { userRouter } = require("./user.router");
const { authRouter } = require("./auth.router");
const { cinemaRouter } = require("./cinema.router");
const { movieRouter } = require("./movie.router");

// http://localhost:7000/api/v1/users
rootRoutter.use("/users", userRouter);
// http://localhost:7000/api/v1/auth
rootRoutter.use("/auth", authRouter);
// http://localhost:7000/api/v1/cinema
rootRoutter.use("/cinema", cinemaRouter);
// http://localhost:7000/api/v1/movie
rootRoutter.use("/movie", movieRouter);
module.exports = {
  rootRoutter,
};
