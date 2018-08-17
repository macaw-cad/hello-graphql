// https://github.com/agustif/movie-database-graphql/blob/master/index.js

const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        movies(query: String!): [Movie]
        movie_by_title(query: String!): Movie
        config: Config
        movie(id: Int!): Movie
        movie_genres: [Genre]
        movies_by_genre(id: Int!): [Movie]
        tv(id: Int!): Tv
        tv_genres: [Genre]
        tv_by_genre(id: Int!): [Movie]
        company(id: Int!): Company
        company_movies(id: Int!): [Movie]
    }
    type Genre {
        id: Int
        name: String
    }
    type Movie {
        id: Int
        title: String
        poster_path: String
        overview: String
        backdrop_path: String
        budget: Int
        genres: [Genre]
        genre_ids: [Int]
        release_date: String
        vote_average: Float
    }
    type Tv {
        id: Int
        name: String
        poster_path: String
        popularity: Float
        overview: String
        backdrop_path: String
        budget: Int
        genres: [Genre]
        first_air_date: String
        homepage: String
        episode_run_time: [Int]
        in_production: Boolean
        languages: [String]
        last_air_date: String
        number_of_episodes: Int
        number_of_seasons: Int
        origin_country: [String]
        original_language: String
        original_name: String
        status: String
        type: String
        vote_average: Float
        vote_count: Int
        created_by: [Person]
        networks: [Network]
        production_companies: [Company]
        seasons: [Season]
        credits: Credit
    }
    type Season {
        air_date: String
        episode_count: Int
        id: Int
        poster_path: String
        season_number: Int
    }
    type Episode {
        air_date: String
        episode_count: Int
        id: Int
        still_path: String
        episode_number: Int
    }
    type Person {
        id: Int
        name: String
        gender: Int
        profile_path: String
    }
    type Network {
        id: Int
        name: String
    }
    type Company {
        id: Int
        name: String
        description: String
        headquarters: String
        homepage: String
        logo_path: String
        parent_company: String
    }
    type Credit {
        id: String
        credit_type: String
        department: String
        job: String
        media_type: String
        media: Media
        person: [Person]
    }
    type Media {
        id: Int
        name: String
        original_name: String
        character: String
        episodes: [Episode]
        seasons: [Season]
    }
    type Images {
        poster_sizes: [String]
        base_url: String
        secure_base_url: String
    }
    type Config {
        images: Images
    }
`;

module.exports = typeDefs;
