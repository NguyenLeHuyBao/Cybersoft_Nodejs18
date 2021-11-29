const { Router } = require("express");
const {
  getListCineplex,
  getListCinema,
} = require("../controllers/cinema.controller");
const cinemaRouter = Router();

cinemaRouter.get("/cineplex-includes-cinema", getListCineplex);
cinemaRouter.get("/cinema-includes-cineplex", getListCinema);

module.exports = {
  cinemaRouter,
};
