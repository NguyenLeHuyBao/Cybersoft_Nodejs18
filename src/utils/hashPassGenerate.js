const bcryptjs = require("bcryptjs");
const hashPassGenerate = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  const hashPassword = bcryptjs.hashSync(password, salt);
  return hashPassword;
};

module.exports = {
  hashPassGenerate,
};
