const express = require("express");
const { rootRoutter } = require("./src/routers/root.router");
const app = express();
const port = 7000;
app.use(express.json());
// http://localhost:7000/api/v1
app.use("/api/v1", rootRoutter);
// http://localhost:7000/hello
app.get("/hello", (req, res) => {
  res.send("Xin Chào Nodejs 20");
});

app.listen(port, () => {
  console.log("App run on port " + port);
});
