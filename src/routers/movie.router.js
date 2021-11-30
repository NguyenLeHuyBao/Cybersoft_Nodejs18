const { Router } = require("express");
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
const movieRouter = Router();

movieRouter.get("/", getAllMovie);
movieRouter.get("/:movieId", getMovieDetail);
movieRouter.post("/", [authenticate, authorize], uploadMovie);
movieRouter.post("/:movieId", updateMovie);
movieRouter.delete("/:movieId", deleteMovie);

module.exports = {
  movieRouter,
};
