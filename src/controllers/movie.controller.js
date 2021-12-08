const { Movie } = require("../models");
const { adminTaskHelper } = require("../utils/CRUD");

const getAllMovie = adminTaskHelper.getAllTask(Movie);

const getMovieDetail = adminTaskHelper.getDetailTask(Movie);

const uploadMovie = async (req, res) => {
  try {
    const { name, alias, poster, trailer, duration, desc, dateShow } = req.body;
    const newMovie = await Movie.create({
      name,
      alias,
      poster,
      trailer,
      duration,
      desc,
      dateShow,
    });
    res
      .status(201)
      .send({ message: "Successfully upload new movie", newMovie });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, alias, poster, trailer, duration, desc, dateShow } = req.body;
    await Movie.update(
      {
        name,
        alias,
        poster,
        trailer,
        duration,
        dateShow,
      },
      {
        where: { id },
      }
    );
    const updateMovie = await Movie.findByPk(id);
    res.status(200).send({ message: "Successfully update movie", updateMovie });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteMovie = adminTaskHelper.deleteTask(Movie);

module.exports = {
  getAllMovie,
  getMovieDetail,
  deleteMovie,
  uploadMovie,
  updateMovie,
};
