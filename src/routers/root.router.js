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
const { ticketRouter } = require("./ticket.router");
const { CinemaMovie } = require("./cinema_movie.router");
const { graphqlRouter } = require("./graphql.router");

// http://localhost:7000/api/v1/users
rootRoutter.use("/users", userRouter);
// http://localhost:7000/api/v1/auth
rootRoutter.use("/auth", authRouter);
// http://localhost:7000/api/v1/cinema
rootRoutter.use("/cinemas", cinemaRouter);
// http://localhost:7000/api/v1/movie
rootRoutter.use("/movies", movieRouter);
// http://localhost:7000/api/v1/cineplex
rootRoutter.use("/cineplexes", cineplexRouter);
// http://localhost:7000/api/v1/seat
rootRoutter.use("/seats", seatRouter);
// http://localhost:7000/api/v1/showtime
rootRoutter.use("/showtimes", showtimeRouter);
// http://localhost:7000/api/v1/news
rootRoutter.use("/news", newsRouter);
// http://localhost:7000/api/v1/tickets
rootRoutter.use("/tickets", ticketRouter);
// http://localhost:7000/api/v1/cinema_movie
rootRoutter.use("/cinema_movie", CinemaMovie);
// http://localhost:7000/api/v1/graphql
rootRoutter.use("/graphql", graphqlRouter);
module.exports = {
  rootRoutter,
};
