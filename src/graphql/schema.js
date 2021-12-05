const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(
  //dau ! la bat buoc phai co field đó
  `
    type User {
        id: Int,
        name: String!
        email: String!
        password: String!
        phone: String!
        role: String!
        avatar: String!
    }

    type rootQuery {
        user(id : Int!): User
        users : [User]
    }
    
    input InputUser {
      name: String!
      email: String!
      password: String!
      phone: String!
      role: String!
      avatar: String!
    }


    type rootMutation {
        createUser(newUser: InputUser): User!
        updateUser(user: InputUser, id: Int): User!
    }

    schema{
        query: rootQuery,
        mutation: rootMutation
    }
`
);

module.exports = {
  graphqlSchema,
};
