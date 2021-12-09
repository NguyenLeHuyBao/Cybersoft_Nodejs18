const { Movie } = require("../models");
const { adminTaskHelper } = require("../utils/CRUD");

const getAllMovie = adminTaskHelper.getAllTask(Movie);

const getMovieDetail = adminTaskHelper.getDetailTask(Movie);

const uploadMovie = adminTaskHelper.uploadTask(Movie);

const updateMovie = adminTaskHelper.updateTask(Movie);

const deleteMovie = adminTaskHelper.deleteTask(Movie);

module.exports = {
  getAllMovie,
  getMovieDetail,
  deleteMovie,
  uploadMovie,
  updateMovie,
};
