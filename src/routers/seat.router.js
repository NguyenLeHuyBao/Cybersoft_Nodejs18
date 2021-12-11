const { Router } = require("express");
const { Seat } = require("../models");
const seatRouter = Router();

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");
const {
  findAllSeat,
  findDetailSeat,
  uploadSeat,
  updateSeat,
  deleteSeat,
} = require("../controllers/seat.controller");

seatRouter.get(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  findAllSeat
);
seatRouter.get(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  findDetailSeat
);
seatRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadSeat
);
seatRouter.post(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  updateSeat
);
seatRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  deleteSeat
);

module.exports = { seatRouter };
