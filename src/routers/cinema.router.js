const { Router } = require("express");
const {
  getListCineplex,
  getListCinema,
  getAllTickets,
} = require("../controllers/cinema.controller");
const cinemaRouter = Router();

cinemaRouter.get("/cineplex-includes-cinema", getListCineplex);
cinemaRouter.get("/cinema-includes-cineplex", getListCinema);
cinemaRouter.get("/get-all-tickets", getAllTickets);

module.exports = {
  cinemaRouter,
};
