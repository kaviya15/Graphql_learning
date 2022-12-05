const { gql } = require("apollo-server");
const typeDefs = gql`
    type user{
        id : ID!
        name : String!
        age : Int!
        friends : [user]
        broken : Boolean!

    }
    type Query{
        users : [user!]!
        singleUser(id:ID!) : [user]
    }
`;
console.log(typeDefs)
module.exports = {
  typeDefs
};