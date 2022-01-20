const { Cinema_movie } = require("../models");

const { adminTaskHelper } = require("../services/common.service");

const findAllCinemaMovie = adminTaskHelper.getAllTask(Cinema_movie);

const uploadCinemaMovie = adminTaskHelper.uploadTask(Cinema_movie);

const findDetailCinemaMovie = adminTaskHelper.getDetailTask(Cinema_movie);

const updateCinemaMovie = adminTaskHelper.updateTask(Cinema_movie);

const removeCinemaMovie = adminTaskHelper.deleteTask(Cinema_movie);

module.exports = {
  findAllCinemaMovie,
  findDetailCinemaMovie,
  updateCinemaMovie,
  removeCinemaMovie,
  uploadCinemaMovie,
};
