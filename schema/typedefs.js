const { gql } = require("apollo-server");
const typeDefs = gql`
    type user{
        id : ID!
        name : String!
        age : Int!
        friends : [user]
        broken : Boolean!
        companies:[companies]

    }
    type companies{
        name:String!
        location : String!
        founded : Int!
    }
    type Query{
        users : [user!]!
        singleUser(name:String!) : user
        companies : [companies!]!
        getSingleCompany(name:String!):companies
    }
`;
console.log(typeDefs)
module.exports = {
  typeDefs
};