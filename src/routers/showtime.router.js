const { Router } = require("express");

const { Showtime } = require("../models");

const {
  getAllShowtime,
  getShowtimeDetail,
  uploadShowtime,
  updateShowtime,
  deleteShowtime,
  getSeatListByShowtime,
} = require("../controllers/showtime.controller");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");

const showtimeRouter = Router();

// GET http://localhost:7000/api/v1/showtimes/seats-by-showtime
showtimeRouter.get("/seats-by-showtime", getSeatListByShowtime);

// GET http://localhost:7000/api/v1/showtimes/
showtimeRouter.get("/", getAllShowtime);

// GET http://localhost:7000/api/v1/showtimes/:id
showtimeRouter.get("/:id", [checkExist(Showtime)], getShowtimeDetail);

// POST http://localhost:7000/api/v1/showtimes/
showtimeRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadShowtime
);

// PUT http://localhost:7000/api/v1/showtimes/:id
showtimeRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Showtime)],
  updateShowtime
);

// DELETE http://localhost:7000/api/v1/showtimes/:id
showtimeRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Showtime)],
  deleteShowtime
);

module.exports = {
  showtimeRouter,
};
