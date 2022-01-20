const { Router } = require("express");

const { User } = require("../models/");

const {
  findAllUser,
  createUser,
  removeUser,
  uploadAvatar,
  findDetailUser,
  updateUser,
} = require("../controllers/user.controller");

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

const userRouter = Router();

userRouter.post(
  "/upload-avatar",
  [authenticate, uploadImage("avatar")],
  uploadAvatar
);

// GET http://localhost:7000/api/v1/users
userRouter.get("/", findAllUser);

// GET http://localhost:7000/api/v1/users/:id
userRouter.get("/:id", [checkExist(User)], findDetailUser);

// POST http://localhost:7000/api/v1/users
userRouter.post(
  "/",
  [authenticate, authorize("ADMIN", "SUPER_ADMIN")],
  createUser
);

// PUT http://localhost:7000/api/v1/users
userRouter.put(
  "/:id",
  [authenticate, authorize("ADMIN", "SUPER_ADMIN"), checkExist(User)],
  updateUser
);

// DELETE http://localhost:7000/api/v1/users
userRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(User)],
  removeUser
);

module.exports = {
  userRouter,
};
