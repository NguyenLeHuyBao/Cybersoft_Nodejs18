const express = require("express");
const { rootRoutter } = require("./src/routers/root.router");
const app = express();
const path = require("path");
const { config } = require("./src/config");
const db = require("./src/models");
app.use(express.json());

//set up graphql
const { graphqlHTTP } = require("express-graphql");
const { graphqlSchema } = require("./src/graphql/schema");
const { graphqlResolvers } = require("./src/graphql/resolver");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

//set up static file
const pathPublicDirectory = path.join(__dirname, "./public");
//cho phep duong dan localhost:7000 truy cap truc tiep toi thu muc public
//localhost:7000/public <==> folder public
app.use("/public", express.static(pathPublicDirectory));
// http://localhost:7000/hello
app.get("/hello", (req, res) => {
  res.send("Xin Chào Nodejs 20");
});
// http://localhost:7000/api/v1
app.use("/api/v1", rootRoutter);

const port = config.server.port;
// db.sequelize
//   //sync để đồng bộ model trên code với db
//   .sync()
//   .then((result) => {

//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log("App run on port " + port);
});
