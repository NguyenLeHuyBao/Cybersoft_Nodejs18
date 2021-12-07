const { Router } = require("express");
const { Movie } = require("../models");
const {
  uploadMovie,
  deleteMovie,
  getAllMovie,
  getMovieDetail,
  updateMovie,
} = require("../controllers/movie.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");
const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");
const movieRouter = Router();

movieRouter.get("/", getAllMovie);
movieRouter.get("/:movieId", [checkExist(Movie)], getMovieDetail);
movieRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadMovie
);
movieRouter.post(
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
