const { Router } = require("express");
const rootRoutter = Router();
const { userRouter } = require("./user.router");
const { authRouter } = require("./auth.router");
const { cinemaRouter } = require("./cinema.router");
const { movieRouter } = require("./movie.router");
const { cineplexRouter } = require("./cineplex.router");
const { seatRouter } = require("./seat.router");
const { showtimeRouter } = require("./showtime.router");
const { newsRouter } = require("./news.router");

// http://localhost:7000/api/v1/users
rootRoutter.use("/users", userRouter);
// http://localhost:7000/api/v1/auth
rootRoutter.use("/auth", authRouter);
// http://localhost:7000/api/v1/cinema
rootRoutter.use("/cinema", cinemaRouter);
// http://localhost:7000/api/v1/movie
rootRoutter.use("/movie", movieRouter);
// http://localhost:7000/api/v1/cineplex
rootRoutter.use("/cineplex", cineplexRouter);
// http://localhost:7000/api/v1/seat
rootRoutter.use("/seat", seatRouter);
// http://localhost:7000/api/v1/showtime
rootRoutter.use("/showtime", showtimeRouter);
// http://localhost:7000/api/v1/news
rootRoutter.use("/news", newsRouter);
module.exports = {
  rootRoutter,
};
