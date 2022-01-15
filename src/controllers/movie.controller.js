const { Movie, Cinema, Showtime, Cineplex } = require("../models");

const { adminTaskHelper } = require("../services/common.service");
const { movieService } = require("../services/movie.service");

var moment = require("moment"); // require
moment().format();

const getAllMovie = adminTaskHelper.getAllTask(Movie);

const getMovieDetail = adminTaskHelper.getDetailTask(Movie);

const uploadMovie = adminTaskHelper.uploadTask(Movie);

const updateMovie = adminTaskHelper.updateTask(Movie);

const deleteMovie = adminTaskHelper.deleteTask(Movie);

const getUpcomingMovie = async (req, res) => {
  try {
    const upcomingMovieList = await Movie.findAll({
      where: {
        isPremiere: true,
      },
    });
    res
      .status(200)
      .send({ message: "Get upcoming movie list success", upcomingMovieList });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getCurrentMovie = async (req, res) => {
  try {
    const currentMovieList = await Movie.findAll({
      where: {
        isPremiere: false,
      },
    });
    res
      .status(200)
      .send({ message: "Get current movie list success", currentMovieList });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getSpecialMovie = async (req, res) => {
  try {
    const specialMovieList = await Movie.findAll({
      where: {
        isSpecial: true,
      },
    });
    res
      .status(200)
      .send({ message: "Get special movie list success", specialMovieList });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getCinemaListByMovie = async (req, res) => {
  try {
    const { movieId } = req.body;
    const cinemaList = await movieService.getCinemaListByMovie(movieId);
    res.status(200).send({ cinemaList });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getShowtimeDateByCinema = async (req, res) => {
  try {
    const { movieId, cinemaId } = req.body;
    const listDays = await movieService.getDaysByCinema(movieId, cinemaId);
    res.status(200).send({ listDays });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getShowtimeByDate = async (req, res) => {
  try {
    const { date, movieId, cinemaId } = req.body;
    const listTime = await movieService.getTimeListByDay(
      date,
      movieId,
      cinemaId
    );
    res.status(200).send({ listTime });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllMovie,
  getMovieDetail,
  deleteMovie,
  uploadMovie,
  updateMovie,
  getUpcomingMovie,
  getCurrentMovie,
  getSpecialMovie,
  getCinemaListByMovie,
  getShowtimeDateByCinema,
  getShowtimeByDate,
};
