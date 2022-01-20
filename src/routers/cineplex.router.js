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

//  GET http://localhost:7000/api/v1/cineplexes
cineplexRouter.get("/", getAllCineplex);

//  GET http://localhost:7000/api/v1/cineplexes/:id
cineplexRouter.get("/:id", [checkExist(Cineplex)], getCineplexDetail);

//  POST http://localhost:7000/api/v1/cineplexes
cineplexRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadCineplex
);

//  PUT http://localhost:7000/api/v1/cineplexes/:id
cineplexRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cineplex)],
  updateCineplex
);

//  DELETE http://localhost:7000/api/v1/cineplexes/:id
cineplexRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Cineplex)],
  deleteCineplex
);

module.exports = {
  cineplexRouter,
};
