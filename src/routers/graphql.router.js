const { Router } = require("express");
const { graphqlHTTP } = require("express-graphql");
const { graphqlSchema } = require("../graphql/schema");
const { graphqlResolvers } = require("../graphql/resolver");
const graphqlRouter = Router();
graphqlRouter.get(
  "/",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
module.exports = {
  graphqlRouter,
};
