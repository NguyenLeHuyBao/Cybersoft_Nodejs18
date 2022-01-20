const { Showtime, Seat } = require("../models");

const { adminTaskHelper } = require("../services/common.service");
const { showtimeService } = require("../services/showtime.service");

const { constants } = require("../utils/constants");

const getAllShowtime = adminTaskHelper.getAllTask(Showtime);

const getShowtimeDetail = adminTaskHelper.getDetailTask(Showtime);

const uploadShowtime = async (req, res) => {
  try {
    const result = await showtimeService.uploadShowtime(req.body);
    res.status(201).send({ message: constants.Success.UploadTask, result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateShowtime = adminTaskHelper.updateTask(Showtime);

const deleteShowtime = adminTaskHelper.deleteTask(Showtime);

const getSeatListByShowtime = async (req, res) => {
  try {
    const { showtimeId } = req.body;
    const listSeat = await showtimeService.getSeatListByShowtime(showtimeId);
    res
      .status(200)
      .send({ message: constants.Success.SeatsByShowtime, listSeat });
  } catch (error) {
    res.status(500).send(error.message);
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
