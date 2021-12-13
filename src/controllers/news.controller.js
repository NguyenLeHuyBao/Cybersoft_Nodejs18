const { News } = require("../models");
const { adminTaskHelper } = require("../utils/CRUD");

const getAllNews = adminTaskHelper.getAllTask(News);
const getNewsDetail = adminTaskHelper.getDetailTask(News);
const uploadNews = adminTaskHelper.uploadTask(News);
const updateNews = adminTaskHelper.updateTask(News);
const deleteNews = adminTaskHelper.deleteTask(News);
const uploadNewsPicture = (req, res) => {};
module.exports = {
  getAllNews,
  getNewsDetail,
  uploadNews,
  updateNews,
  deleteNews,
  uploadNewsPicture,
};
