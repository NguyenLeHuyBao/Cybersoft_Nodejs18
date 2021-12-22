const { Movie } = require("../models");
const { adminTaskHelper } = require("../utils/CRUD");

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

module.exports = {
  getAllMovie,
  getMovieDetail,
  deleteMovie,
  uploadMovie,
  updateMovie,
  getUpcomingMovie,
  getCurrentMovie,
  getSpecialMovie,
};
