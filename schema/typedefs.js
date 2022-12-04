const { gql } = require("apollo-server");
const typeDefs = gql`
    type user{
        id : ID!
        name : String!
        age : Int!,
        broken : Boolean!
    }
    type Query{
        users : [user!]!
    }
`;
module.exports = {
  typeDefs
};