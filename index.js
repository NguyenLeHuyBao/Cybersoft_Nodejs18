const express = require("express");
const { config } = require("./src/config");
const { rootRoutter } = require("./src/routers/root.router");
const path = require("path");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();
app.use(express.json());
const port = config.server.port;

//set up static file
const pathPublicDirectory = path.join(__dirname, "./public");
//cho phep duong dan localhost:7000 truy cap truc tiep toi thu muc public
//localhost:7000/public <==> folder public
app.use("/public", express.static(pathPublicDirectory));
// http://localhost:7000/api/v1
app.use("/api/v1", rootRoutter);

app.listen(port, () => {
  console.log("App run on port " + port);
});
