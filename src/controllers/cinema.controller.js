const { Cinema, Cineplex } = require("../models");

const { constants } = require("../utils/constants");

const { cinemaService } = require("../services/cinema.service");
const { adminTaskHelper } = require("../services/common.service");

const getListCinema = adminTaskHelper.getAllTask(Cinema);

const getCinemaDetail = adminTaskHelper.getDetailTask(Cinema);

const uploadCinema = async (req, res) => {
  try {
    const result = await cinemaService.uploadCinema(req.body);
    res.status(201).send({ message: constants.Success.UploadTask, result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCinema = adminTaskHelper.updateTask(Cinema);

const deleteCinema = adminTaskHelper.deleteTask(Cinema);

module.exports = {
  getListCinema,
  getCinemaDetail,
  uploadCinema,
  updateCinema,
  deleteCinema,
};
