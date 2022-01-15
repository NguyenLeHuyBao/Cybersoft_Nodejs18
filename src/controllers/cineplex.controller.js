const { Cineplex } = require("../models");

const { adminTaskHelper } = require("../services/common.service");

const getAllCineplex = adminTaskHelper.getAllTask(Cineplex);

const getCineplexDetail = adminTaskHelper.getDetailTask(Cineplex);

const uploadCineplex = adminTaskHelper.uploadTask(Cineplex);

const updateCineplex = adminTaskHelper.updateTask(Cineplex);

const deleteCineplex = adminTaskHelper.deleteTask(Cineplex);

module.exports = {
  getAllCineplex,
  getCineplexDetail,
  deleteCineplex,
  uploadCineplex,
  updateCineplex,
};
