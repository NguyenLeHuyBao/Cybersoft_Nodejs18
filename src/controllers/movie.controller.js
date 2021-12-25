const { Movie, Cinema, Showtime, Cineplex } = require("../models");
const { adminTaskHelper } = require("../utils/CRUD");
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

const getCinemasByMovie = async (req, res) => {
  try {
    const { movieId } = req.body;
    let cinemaList = await Movie.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Cinema,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          through: { attributes: [] },
        },
      ],
      where: {
        id: movieId,
      },
    });
    cinemaList = cinemaList.Cinemas.map((cinema, index) => {
      return {
        id: cinema.id,
        name: cinema.name,
        address: cinema.address,
        image: cinema.image,
      };
    });
    res.status(200).send({ cinemaList, movieId });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getShowtimeDateByCinema = async (req, res) => {
  try {
    const { movieId, cinemaId } = req.body;
    var listDay = await Showtime.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        movieId,
        cinemaId,
      },
    });
    listDay = listDay.map((item, index) => {
      let day = moment(item.startTime).format("DD-MM-YYYY");
      return day;
    });
    const uniqueListDay = listDay.filter((element, index) => {
      return listDay.indexOf(element) === index;
    });
    res.status(200).send(uniqueListDay);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

const getShowtimeByDate = async (req, res) => {
  try {
    const { date, movieId, cinemaId } = req.body;
    const listTime = [];
    const dayFormat = moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
    const showTimeList = await Showtime.findAll({
      where: { movieId, cinemaId },
    });
    showTimeList.forEach((showTime, index) => {
      let showTimeDay = moment(showTime.startTime).format("YYYY-MM-DD");
      if (dayFormat === showTimeDay) {
        let showTimeTime = moment(showTime.startTime).format("HH:mm");
        listTime.push(showTimeTime);
      }
    });
    res.status(200).send({ listTime });
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
  getCinemasByMovie,
  getShowtimeDateByCinema,
  getShowtimeByDate,
};
