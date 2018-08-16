// https://github.com/agustif/movie-database-graphql

const RESTConnector = require('../connectors');

const BASE_URL = 'https://api.themoviedb.org/3';

// helpers
function appendApiKey(url) {
    if (!process.env.API) {
        throw 'No process.env.API defined. Add it to the .env file';
    }

    url += url.indexOf('?') > -1 ? '&' : '?';
    url += `api_key=${process.env.API}`;

    return url;
}

function replacePlaceholders(url, args) {
    if (url.indexOf('{query}') > -1 && args.query) {
        url = url.replace('{query}', args.query);
    }

    if (url.indexOf('{id}') > -1 && args.id) {
        url = url.replace('{id}', args.query);
    }

    return url;
}

const load = (endpoint, args, context) => (_, args) => {
    let url = `${BASE_URL}/${endpoint}`;

    url = appendApiKey(url);
    url = replacePlaceholders(url, args);

    return RESTConnector.loadOne(url)
        .then(({ results }) => results);
}


const resolvers = {
    Query: {
        movies: load('search/movie?query={query}&include_adults=false')  
    }
};

module.exports = resolvers;