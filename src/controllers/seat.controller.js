const { Seat } = require("../models");

const { adminTaskHelper } = require("../services/common.service");
const { seatService } = require("../services/seat.service");

const findAllSeat = adminTaskHelper.getAllTask(Seat);

const findDetailSeat = adminTaskHelper.getDetailTask(Seat);

const uploadSeat = adminTaskHelper.uploadTask(Seat);

const updateSeat = adminTaskHelper.updateTask(Seat);

const deleteSeat = adminTaskHelper.deleteTask(Seat);

const bookSeat = async (req, res) => {
  try {
    const { seatId, showtimeId } = req.body;
    const bookSeat = await seatService.bookSeat(seatId, showtimeId);
    res.status(200).send(bookSeat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  findAllSeat,
  findDetailSeat,
  uploadSeat,
  updateSeat,
  deleteSeat,
  bookSeat,
};
