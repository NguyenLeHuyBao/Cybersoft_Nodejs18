const { Router } = require("express");

const { News } = require("../models");

const {
  getAllNews,
  getNewsDetail,
  uploadNews,
  deleteNews,
  updateNews,
  uploadNewsPicture,
} = require("../controllers/news.controller");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const {
  uploadImage,
} = require("../middlewares/upload/upload-image.middleware");

const newsRouter = Router();

// POST http://localhost:7000/api/v1/news/upload-news-picture
newsRouter.post(
  "/upload-news-picture/:id",
  [uploadImage("newsImg")],
  uploadNewsPicture
);

// GET http://localhost:7000/api/v1/news/
newsRouter.get("/", getAllNews);

// GET http://localhost:7000/api/v1/news/:id
newsRouter.get("/:id", getNewsDetail);

// POST http://localhost:7000/api/v1/news/
newsRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadNews
);

// POST http://localhost:7000/api/v1/news/:id
newsRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(News)],
  updateNews
);

// DELETE http://localhost:7000/api/v1/news/:id
newsRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(News)],
  deleteNews
);

module.exports = {
  newsRouter,
};
