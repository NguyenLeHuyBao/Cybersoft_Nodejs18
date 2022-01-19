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
  bookSeat,
} = require("../controllers/seat.controller");

seatRouter.get("/book-seat", bookSeat);

seatRouter.get("/", findAllSeat);
seatRouter.get("/:id", [checkExist(Seat)], findDetailSeat);
seatRouter.post(
  "/",
  // [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadSeat
);
seatRouter.put(
  "/:id",
  // [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  [checkExist(Seat)],
  updateSeat
);
seatRouter.delete(
  "/:id",
  // [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  [checkExist(Seat)],
  deleteSeat
);

module.exports = { seatRouter };
