const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "fake-secret";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ message: "You need to log in first" });
  }
};

const authorize = (arrayRole) => (req, res, next) => {
  const { user } = req;
  if (!arrayRole.includes(user.role))
    res.status(403).send({ message: "You dont have enough permission" });
  next();
};
module.exports = {
  authenticate,
  authorize,
};
