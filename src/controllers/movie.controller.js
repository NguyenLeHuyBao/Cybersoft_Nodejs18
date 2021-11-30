const { Movie } = require("../models");
const bcryptjs = require("bcryptjs");
const getAllMovie = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const uploadMovie = (req, res) => {
  const token = req.header("token");
};

const deleteMovie = (req, res) => {};

const getMovieDetail = (req, res) => {};

const updateMovie = (req, res) => {};
module.exports = {
  getAllMovie,
  getMovieDetail,
  deleteMovie,
  uploadMovie,
  updateMovie,
};
