const express = require("express");
const path = require("path");

const { config } = require("./src/config");
const { rootRoutter } = require("./src/routers/root.router");
const port = config.server.port;

const app = express();
app.use(express.json());

const pathPublicDirectory = path.join(__dirname, "./public");

app.use("/public", express.static(pathPublicDirectory));

// http://localhost:7000/api/v1
app.use("/api/v1", rootRoutter);

app.listen(port, () => {
  console.log("App run on port " + port);
});
