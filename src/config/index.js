const path = require("path");
require("dotenv").config();

// const server = {
//   host: "http://localhost:7000/",
//   port: 7000,
// };

const server = {
  host: process.env.HOST || "http://localhost:7000/",
  port: process.env.PORT || 7000,
};

const config = {
  server,
};

module.exports = {
  config,
};
