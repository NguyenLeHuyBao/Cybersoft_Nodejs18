const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "fake-secret";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ message: "bạn chưa đăng nhập" });
  }
};

const authorize = (arrayRole) => (req, res, next) => {
  const { user } = req;
  if (arrayRole.includes(user.role)) {
    next();
  } else {
    res.status(403).send({ message: "Không được phép xóa" });
  }
};
module.exports = {
  authenticate,
  authorize,
};
