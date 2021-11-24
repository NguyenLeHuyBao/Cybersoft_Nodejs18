const { Router } = require("express");
const rootRoutter = Router();
const { userRouter } = require("./user.router");

// http://localhost:7000/api/v1/users
rootRoutter.use("/users", userRouter);

module.exports = {
  rootRoutter,
};
