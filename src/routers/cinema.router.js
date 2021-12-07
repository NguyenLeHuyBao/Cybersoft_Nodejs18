const { Router } = require("express");
const { Cinema } = require("../models");
const {
  getListCineplex,
  getListCinema,
  getAllTickets,
  getAllCinemaMovies,
  getAllShowtimes,
  getAllSeats,
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

cinemaRouter.get("/cineplex-includes-cinema", getListCineplex);
cinemaRouter.get("/cinema-includes-cineplex", getListCinema);
cinemaRouter.get("/get-all-tickets", getAllTickets);
cinemaRouter.get("/get-all-cinema-movies", getAllCinemaMovies);
cinemaRouter.get("/get-all-showtimes", getAllShowtimes);
cinemaRouter.get("/get-all-seats", getAllSeats);
//CRUD
cinemaRouter.get("/:id", [checkExist(Cinema)], getCinemaDetail);
cinemaRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadCinema
);
cinemaRouter.post(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cinema)],
  updateCinema
);
cinemaRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cinema)],
  deleteCinema
);

module.exports = {
  cinemaRouter,
};
