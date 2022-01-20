const { Router } = require("express");

const { Seat } = require("../models");

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

const seatRouter = Router();

// GET http://localhost:7000/api/v1/seats/book-seat
seatRouter.get("/book-seat", bookSeat);

// GET http://localhost:7000/api/v1/seats/
seatRouter.get("/", findAllSeat);

// GET http://localhost:7000/api/v1/seats/:id
seatRouter.get("/:id", [checkExist(Seat)], findDetailSeat);

// POST http://localhost:7000/api/v1/seats/
seatRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadSeat
);

// PUT http://localhost:7000/api/v1/seats/
seatRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  [checkExist(Seat)],
  updateSeat
);

// DELETE http://localhost:7000/api/v1/seats/:id
seatRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Seat)],
  [checkExist(Seat)],
  deleteSeat
);

module.exports = { seatRouter };
