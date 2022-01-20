const { Router } = require("express");
const { Movie } = require("../models");
const {
  uploadMovie,
  deleteMovie,
  getAllMovie,
  getMovieDetail,
  updateMovie,
  getUpcomingMovie,
  getCurrentMovie,
  getSpecialMovie,
  getCinemaListByMovie,
  getShowtimeDateByCinema,
  getShowtimeByDate,
} = require("../controllers/movie.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");
const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");
const movieRouter = Router();

//  GET http://localhost:7000/api/v1/movies/upcoming
movieRouter.get("/upcoming", getUpcomingMovie);

//  GET http://localhost:7000/api/v1/movies/current
movieRouter.get("/current", getCurrentMovie);

//  GET http://localhost:7000/api/v1/movies/special
movieRouter.get("/special", getSpecialMovie);

//  GET http://localhost:7000/api/v1/movies/get-cinemas
movieRouter.get("/get-cinemas", getCinemaListByMovie);

//  GET http://localhost:7000/api/v1/movies/get-days
movieRouter.get("/get-days", getShowtimeDateByCinema);

//  GET http://localhost:7000/api/v1/movies/get-times
movieRouter.get("/get-showtimes", getShowtimeByDate);

//  GET http://localhost:7000/api/v1/movies/
movieRouter.get("/", getAllMovie);

//  GET http://localhost:7000/api/v1/movies/:id
movieRouter.get("/:id", [checkExist(Movie)], getMovieDetail);

//  POST http://localhost:7000/api/v1/movies/
movieRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadMovie
);

//  PUT http://localhost:7000/api/v1/movies/:id
movieRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Movie)],
  updateMovie
);

//  DELETE http://localhost:7000/api/v1/movies/:id
movieRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Movie)],
  deleteMovie
);

module.exports = {
  movieRouter,
};
