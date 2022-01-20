var moment = require("moment");

const { Movie } = require("../models");

const { adminTaskHelper } = require("../services/common.service");
const { movieService } = require("../services/movie.service");
const { constants } = require("../utils/constants");

moment().format();

const getAllMovie = adminTaskHelper.getAllTask(Movie);

const getMovieDetail = adminTaskHelper.getDetailTask(Movie);

const uploadMovie = async (req, res) => {
  try {
    const result = await movieService.uploadMovie(req.body);
    res.status(201).send({ message: constants.Success.UpdateTask, result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateMovie = adminTaskHelper.updateTask(Movie);

const deleteMovie = adminTaskHelper.deleteTask(Movie);

const getUpcomingMovie = async (req, res) => {
  try {
    const upcomingMovieList = await movieService.getUpcomingMovie();
    res
      .status(200)
      .send({ message: constants.Success.UpcomingMovies, upcomingMovieList });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCurrentMovie = async (req, res) => {
  try {
    const currentMovieList = await movieService.getCurrentMovie();
    res
      .status(200)
      .send({ message: constants.Success.CurrentMovies, currentMovieList });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSpecialMovie = async (req, res) => {
  try {
    const specialMovieList = await movieService.getSpecialMovie();
    res
      .status(200)
      .send({ message: constants.Success.SpecialMovies, specialMovieList });
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
