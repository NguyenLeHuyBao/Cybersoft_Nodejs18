const { Router } = require("express");

const { Cinema } = require("../models");

const {
  getListCinema,
  getCinemaDetail,
  uploadCinema,
  updateCinema,
  deleteCinema,
} = require("../controllers/cinema.controller");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const cinemaRouter = Router();

// GET http://localhost:7000/api/v1/cinemas/
cinemaRouter.get("/", getListCinema);

// GET http://localhost:7000/api/v1/cinemas/:id
cinemaRouter.get("/:id", [checkExist(Cinema)], getCinemaDetail);

// POST http://localhost:7000/api/v1/cinemas/
cinemaRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadCinema
);

// PUT http://localhost:7000/api/v1/cinemas/
cinemaRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cinema)],
  updateCinema
);

// DELETE http://localhost:7000/api/v1/cinemas/:id
cinemaRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cinema)],
  deleteCinema
);

module.exports = {
  cinemaRouter,
};
