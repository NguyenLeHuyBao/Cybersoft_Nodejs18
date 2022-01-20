const { Cineplex } = require("../models");
const { cineplexService } = require("../services/cineplex.service");

const { adminTaskHelper } = require("../services/common.service");
const { constants } = require("../utils/constants");

const getAllCineplex = adminTaskHelper.getAllTask(Cineplex);

const getCineplexDetail = adminTaskHelper.getDetailTask(Cineplex);

const uploadCineplex = async (req, res) => {
  try {
    const result = await cineplexService.uploadCineplex(req.body);
    res.status(201).send({ message: constants.Success.UploadTask, result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCineplex = adminTaskHelper.updateTask(Cineplex);

const deleteCineplex = adminTaskHelper.deleteTask(Cineplex);

module.exports = {
  getAllCineplex,
  getCineplexDetail,
  deleteCineplex,
  uploadCineplex,
  updateCineplex,
};
