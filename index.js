const express = require("express");
const { rootRoutter } = require("./src/routers/root.router");
const app = express();
const path = require("path");
const port = 7000;
app.use(express.json());

//set up static file
const pathPublicDirectory = path.join(__dirname, "./public");
//cho phep duong dan localhost:7000 truy cap truc tiep toi thu muc public
//localhost:7000 <==> folder public
app.use(express.static(pathPublicDirectory));
// http://localhost:7000/hello
app.get("/hello", (req, res) => {
  res.send("Xin Chào Nodejs 20");
});
// http://localhost:7000/api/v1
app.use("/api/v1", rootRoutter);

app.listen(port, () => {
  console.log("App run on port " + port);
});
