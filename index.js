const express = require("express");
const { config } = require("./src/config");
const { rootRoutter } = require("./src/routers/root.router");
const path = require("path");
const db = require("./src/models");
const passport = require("passport");
const facebookStrategy = require("passport-facebook-token");
const app = express();
app.use(express.json());
const port = config.server.port;

//send grid

//set up facebook-login
passport.use(
  "fb-login",
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

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
// http://localhost:7000/api/v1
app.use("/api/v1", rootRoutter);

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
