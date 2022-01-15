const { Movie, Cinema, Showtime } = require("../models");
const { constants } = require("../utils/constants");

var moment = require("moment");
moment().format();

const getCinemaListByMovie = async (movieId) => {
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
  if (!cinemaList) throw new Error(constants.Errors.BadRequest);

  cinemaList = cinemaList.Cinemas.map((cinema, index) => {
    return {
      id: cinema.id,
      name: cinema.name,
      address: cinema.address,
      image: cinema.image,
    };
  });
  return cinemaList;
};

const getDaysByCinema = async (movieId, cinemaId) => {
  let listDays = await Showtime.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {
      movieId,
      cinemaId,
    },
  });

  if (!listDays) throw new Error(constants.Errors.BadRequest);

  listDays = listDays.map((date, index) => {
    let day = moment(date.startTime).format("DD-MM-YYYY");
    return day;
  });

  const uniqueListDay = listDays.filter((element, index) => {
    return listDays.indexOf(element) === index;
  });
  return uniqueListDay;
};

const getTimeListByDay = async (day, movieId, cinemaId) => {
  const listTime = [];
  const dayFormat = moment(day, "DD-MM-YYYY").format("YYYY-MM-DD");
  const showTimeList = await Showtime.findAll({
    where: { movieId, cinemaId },
  });

  if (!showTimeList) throw new Error(constants.Errors.BadRequest);

  showTimeList.forEach((showTime, index) => {
    let showTimeDay = moment(showTime.startTime).format("YYYY-MM-DD");
    if (dayFormat === showTimeDay) {
      let showTimeTime = moment(showTime.startTime).format("HH:mm");
      listTime.push(showTimeTime);
    }
  });
  const uniqueListTime = listTime.filter((element, index) => {
    return listTime.indexOf(element) === index;
  });
  return uniqueListTime;
};
const movieService = {
  getCinemaListByMovie,
  getDaysByCinema,
  getTimeListByDay,
};

module.exports = {
  movieService,
};
