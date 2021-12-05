const { Router } = require("express");
const {
  getListCineplex,
  getListCinema,
  getAllTickets,
  getAllCinemaMovies,
  getAllShowtimes,
} = require("../controllers/cinema.controller");
const cinemaRouter = Router();

cinemaRouter.get("/cineplex-includes-cinema", getListCineplex);
cinemaRouter.get("/cinema-includes-cineplex", getListCinema);
cinemaRouter.get("/get-all-tickets", getAllTickets);
cinemaRouter.get("/get-all-cinema-movies", getAllCinemaMovies);
cinemaRouter.get("/get-all-showtimes", getAllShowtimes);

module.exports = {
  cinemaRouter,
};
