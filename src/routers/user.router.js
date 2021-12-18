const { Router } = require("express");
const userRouter = Router();
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
userRouter.post(
  "/upload-avatar",
  [authenticate, uploadImage("avatar")],
  uploadAvatar
);
userRouter.get("/", findAllUser);
userRouter.get("/:id", [checkExist(User)], findDetailUser);
userRouter.post(
  "/",
  // [authenticate, authorize("ADMIN", "SUPER_ADMIN")],
  createUser
);
userRouter.put(
  "/:id",
  // [authenticate, authorize("ADMIN", "SUPER_ADMIN"), checkExist(User)],
  [authenticate, checkExist(User)],
  [checkExist(User)],
  updateUser
);
userRouter.delete(
  "/:id",
  // [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(User)],
  removeUser
);
module.exports = {
  userRouter,
};
