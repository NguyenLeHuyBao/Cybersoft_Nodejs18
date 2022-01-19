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

showtimeRouter.get("/seats-by-showtime", getSeatListByShowtime);

showtimeRouter.get("/", getAllShowtime);

showtimeRouter.get("/:id", [checkExist(Showtime)], getShowtimeDetail);

showtimeRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadShowtime
);

showtimeRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Showtime)],
  updateShowtime
);

showtimeRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Showtime)],
  deleteShowtime
);

module.exports = {
  showtimeRouter,
};
