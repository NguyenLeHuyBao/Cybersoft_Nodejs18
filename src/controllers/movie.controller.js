const { Movie } = require("../models");
const getAllMovie = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send({ message: "Successfully get all movies", movieList });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieDetail = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movieDetail = await Movie.findOne({ where: { id: movieId } });
    res
      .status(200)
      .send({ message: "Successfully get movie detail", movieDetail });
  } catch (error) {
    res.status(500).send(error);
  }
};

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

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movieDelete = await Movie.findByPk(id);
    await Movie.destroy({
      where: { id },
    });
    res.status(200).send({ message: "Succesfully delete movie", movieDelete });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllMovie,
  getMovieDetail,
  deleteMovie,
  uploadMovie,
  updateMovie,
};
