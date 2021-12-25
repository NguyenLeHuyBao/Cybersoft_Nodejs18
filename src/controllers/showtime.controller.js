const { Showtime, Cinema } = require("../models");
const { adminTaskHelper } = require("../utils/CRUD");
const getAllShowtime = adminTaskHelper.getAllTask(Showtime);
const getShowtimeDetail = adminTaskHelper.getDetailTask(Showtime);
const uploadShowtime = adminTaskHelper.uploadTask(Showtime);
const updateShowtime = adminTaskHelper.updateTask(Showtime);
const deleteShowtime = adminTaskHelper.deleteTask(Showtime);

module.exports = {
  getAllShowtime,
  getShowtimeDetail,
  uploadShowtime,
  updateShowtime,
  deleteShowtime,
};
