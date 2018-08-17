require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const schema = require('./src/data/mergedSchemas/schema');

const server = new ApolloServer({ schema: schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});