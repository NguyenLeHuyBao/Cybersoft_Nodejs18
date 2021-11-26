const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "fake-secret";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ message: "token không hợp lệ" });
  }
};

module.exports = {
  authenticate,
};
