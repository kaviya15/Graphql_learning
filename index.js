const {ApolloServer} = require("apollo-server");
const typeDefs = require('./schema/typedefs').typeDefs;
const resolvers = require("./schema/resolvers");
const server = new ApolloServer({typeDefs,resolvers});
server.listen().then(res=>console.log("res",res,res.url));
