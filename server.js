require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/data/swapi/typeDefs');
const resolvers = require('./src/data/swapi/resolvers');
// const typeDefs = require('./src/data/themoviedb/typeDefs');
// const resolvers = require('./src/data/themoviedb/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});