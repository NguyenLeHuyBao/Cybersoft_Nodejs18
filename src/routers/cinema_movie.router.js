const { Router } = require("express");

const { Cinema_movie } = require("../models");

const {
  findAllCinemaMovie,
  findDetailCinemaMovie,
  updateCinemaMovie,
  removeCinemaMovie,
  uploadCinemaMovie,
} = require("../controllers/cinema_movie.controller");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const CinemaMovie = Router();

// GET http://localhost:7000/api/v1/cinema_movie/
CinemaMovie.get("/", findAllCinemaMovie);

// GET http://localhost:7000/api/v1/cinema_movie/:id
CinemaMovie.get("/:id", [checkExist(Cinema_movie)], findDetailCinemaMovie);

// POST http://localhost:7000/api/v1/cinema_movie/
CinemaMovie.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadCinemaMovie
);

// PUT http://localhost:7000/api/v1/cinema_movie/
CinemaMovie.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cinema_movie)],
  updateCinemaMovie
);

// DELETE http://localhost:7000/api/v1/cinema_movie/:id
CinemaMovie.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cinema_movie)],
  removeCinemaMovie
);

module.exports = {
  CinemaMovie,
};
