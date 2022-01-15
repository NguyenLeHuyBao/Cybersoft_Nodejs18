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

movieRouter.get("/upcoming", getUpcomingMovie);
movieRouter.get("/current", getCurrentMovie);
movieRouter.get("/special", getSpecialMovie);
movieRouter.get("/get-cinema", getCinemaListByMovie);
movieRouter.get("/get-date", getShowtimeDateByCinema);
movieRouter.get("/get-time", getShowtimeByDate);

movieRouter.get("/", getAllMovie);
movieRouter.get("/:id", [checkExist(Movie)], getMovieDetail);
movieRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadMovie
);
movieRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Movie)],
  updateMovie
);
movieRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Movie)],
  deleteMovie
);

module.exports = {
  movieRouter,
};
