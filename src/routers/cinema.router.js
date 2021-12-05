const { Router } = require("express");
const {
  getListCineplex,
  getListCinema,
  getAllTickets,
  getAllCinemaMovies,
} = require("../controllers/cinema.controller");
const cinemaRouter = Router();

cinemaRouter.get("/cineplex-includes-cinema", getListCineplex);
cinemaRouter.get("/cinema-includes-cineplex", getListCinema);
cinemaRouter.get("/get-all-tickets", getAllTickets);
cinemaRouter.get("/get-all-cinema-movies", getAllCinemaMovies);

module.exports = {
  cinemaRouter,
};
