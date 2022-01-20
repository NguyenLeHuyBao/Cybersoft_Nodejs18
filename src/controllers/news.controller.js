const { News } = require("../models");

const { adminTaskHelper } = require("../services/common.service");
const { newsService } = require("../services/news.service");

const { constants } = require("../utils/constants");

const getAllNews = adminTaskHelper.getAllTask(News);

const getNewsDetail = adminTaskHelper.getDetailTask(News);

const uploadNews = adminTaskHelper.uploadTask(News);

const updateNews = adminTaskHelper.updateTask(News);

const deleteNews = adminTaskHelper.deleteTask(News);

const uploadNewsPicture = async (req, res) => {
  try {
    const { file } = req;
    const { id } = req.params;
    const success = await newsService.uploadNewsImage(id, file);
    const { newsUploadImage, result } = success;
    res.status(200).send({
      message: constants.Success.UploadImage,
      newsUploadImage,
      result,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  getAllNews,
  getNewsDetail,
  uploadNews,
  updateNews,
  deleteNews,
  uploadNewsPicture,
};
