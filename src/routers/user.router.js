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
// http://localhost:7000/api/v1/users
userRouter.post("/upload-avatar", uploadAvatar);
userRouter.get("/", findAllUser);
userRouter.get("/:id", findDetailUser);
userRouter.post("/", createUser);
userRouter.post("/:id", updateUser);
userRouter.delete("/:id", removeUser);
module.exports = {
  userRouter,
};
