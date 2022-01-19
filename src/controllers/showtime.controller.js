const { Showtime, Cinema, Seat, bookedSeat } = require("../models");

const { adminTaskHelper } = require("../services/common.service");

const getAllShowtime = adminTaskHelper.getAllTask(Showtime);

const getShowtimeDetail = adminTaskHelper.getDetailTask(Showtime);

const uploadShowtime = adminTaskHelper.uploadTask(Showtime);

const updateShowtime = adminTaskHelper.updateTask(Showtime);

const deleteShowtime = adminTaskHelper.deleteTask(Showtime);

const getSeatListByShowtime = async (req, res) => {
  try {
    const { showtimeId } = req.body;
    const listSeat = await Seat.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        showtimeId,
      },
    });
    res.status(200).send(listSeat);
  } catch (error) {
    res.status(500).send({ error });
  }
};
module.exports = {
  getAllShowtime,
  getShowtimeDetail,
  uploadShowtime,
  updateShowtime,
  deleteShowtime,
  getSeatListByShowtime,
};
