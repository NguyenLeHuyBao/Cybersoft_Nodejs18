const { Seat, bookedSeat, Showtime } = require("../models");
const { constants } = require("../utils/constants");

const bookSeat = async (seatId, showtimeId) => {
  const bookSeat = await Seat.findOne({
    where: {
      id: seatId,
      showtimeId,
    },
  });

  const checkBookSeatExist = await bookedSeat.findOne({
    where: { showtimeId, seatId },
  });

  if (checkBookSeatExist || bookSeat.status)
    throw new Error(constants.Errors.BadRequest);

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
};

module.exports = { seatService };
