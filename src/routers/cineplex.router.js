const { Router } = require("express");
const { Cineplex } = require("../models");
const {
  getAllCineplex,
  getCineplexDetail,
  uploadCineplex,
  updateCineplex,
  deleteCineplex,
} = require("../controllers/cineplex.controller");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");
const cineplexRouter = Router();

cineplexRouter.get(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  getAllCineplex
);
cineplexRouter.get(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cineplex)],
  getCineplexDetail
);
cineplexRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadCineplex
);
cineplexRouter.post(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cineplex)],
  updateCineplex
);
cineplexRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cineplex)],
  deleteCineplex
);

module.exports = {
  cineplexRouter,
};
