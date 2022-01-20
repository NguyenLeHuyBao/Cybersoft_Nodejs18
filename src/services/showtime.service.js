const { Showtime, Seat } = require("../models");

const { constants } = require("../utils/constants");

const uploadShowtime = async (body) => {
  const { startTime, cinemaId } = body;
  const isExisted = await Showtime.findOne({ where: { startTime, cinemaId } });

  if (isExisted) throw new Error(constants.Errors.ExistedData);

  const result = await Showtime.create(body);

  return result;
};

const getSeatListByShowtime = async (showtimeId) => {
  const listSeat = await Seat.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {
      showtimeId,
    },
  });

  if (!listSeat) throw new Error(constants.Errors.InvalidId);

  return listSeat;
};

const showtimeService = {
  uploadShowtime,
  getSeatListByShowtime,
};

module.exports = {
  showtimeService,
};
