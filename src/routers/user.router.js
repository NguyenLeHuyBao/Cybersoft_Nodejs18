const { Router } = require("express");
const userRouter = Router();
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
userRouter.get("/:id", [checkExist], findDetailUser);
userRouter.post("/", createUser);
userRouter.put("/:id", [checkExist], updateUser);
userRouter.delete("/:id", [checkExist], removeUser);
module.exports = {
  userRouter,
};
