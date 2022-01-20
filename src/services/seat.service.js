const { Seat, bookedSeat, Showtime } = require("../models");
const { constants } = require("../utils/constants");

const uploadSeat = async (body) => {
  const { name, showtimeId } = body;

  const isExisted = await Seat.findOne({ where: { name, showtimeId } });

  if (isExisted) throw new Error(constants.Errors.ExistedData);

  const result = await Seat.create(body);

  return result;
};

const bookSeat = async (seatId, showtimeId) => {
  const bookSeat = await Seat.findOne({
    where: {
      id: seatId,
      showtimeId,
    },
  });

  const isExisted = await bookedSeat.findOne({
    where: { showtimeId, seatId },
  });
  if (isExisted || bookSeat.status)
    throw new Error(constants.Errors.ExistedData);

  await bookedSeat.create({ seatId, showtimeId });

  const updatedSeat = await Seat.update(
    { status: true },
    {
      where: {
        id: seatId,
        showtimeId,
      },
    }
  );

  return updatedSeat;
};

const seatService = {
  bookSeat,
  uploadSeat,
};

module.exports = { seatService };
