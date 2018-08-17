const { gql } = require('apollo-server');
const { mergeSchemas } = require('graphql-tools');
const swapiSchema = require('../swapi/schema');
const movieDbSchema = require('../themoviedb/schema');

const linkTypeDefs = `
extend type Film {
  movieDbData: Movie
}
`;

const schema = mergeSchemas({
schemas: [
  swapiSchema,
  movieDbSchema,
  linkTypeDefs
],
resolvers: {
  Film: {
    movieDbData: {
      resolve(film, args, context, info) {
        return info.mergeInfo.delegateToSchema({
          schema: movieDbSchema,
          operation: 'query',
          fieldName: 'movie_by_title',
          args: {
            query: film.title,
          },
          context,
          info
        });
      }
    }
  }
}
});

module.exports = schema;