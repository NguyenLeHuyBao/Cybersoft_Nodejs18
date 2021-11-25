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
// http://localhost:7000/api/v1/users
userRouter.post("/upload-avatar", uploadAvatar);
userRouter.get("/", findAllUser);
userRouter.get("/:id", [checkExist(User)], findDetailUser);
userRouter.post("/", createUser);
userRouter.put("/:id", [checkExist(User)], updateUser);
userRouter.delete("/:id", [checkExist(User)], removeUser);
module.exports = {
  userRouter,
};
