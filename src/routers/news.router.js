const { Router } = require("express");
const {
  getAllNews,
  getNewsDetail,
  uploadNews,
  deleteNews,
  updateNews,
  uploadNewsPicture,
} = require("../controllers/news.controller");

const newsRouter = Router();

newsRouter.post("/upload-news-picture", uploadNewsPicture);

newsRouter.get("/", getAllNews);
newsRouter.get("/:id", getNewsDetail);
newsRouter.post("/", uploadNews);
newsRouter.post("/:id", updateNews);
newsRouter.delete("/:id", deleteNews);

module.exports = {
  newsRouter,
};
