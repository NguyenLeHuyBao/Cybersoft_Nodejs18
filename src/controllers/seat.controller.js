const { Seat } = require("../models/");
const { adminTaskHelper } = require("../utils/CRUD");

const findAllSeat = adminTaskHelper.getAllTask(Seat);

const findDetailSeat = adminTaskHelper.getDetailTask(Seat);

const uploadSeat = adminTaskHelper.uploadTask(Seat);

const updateSeat = adminTaskHelper.updateTask(Seat);

const deleteSeat = adminTaskHelper.deleteTask(Seat);

module.exports = {
  findAllSeat,
  findDetailSeat,
  uploadSeat,
  updateSeat,
  deleteSeat,
};
