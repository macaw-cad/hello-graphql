# GraphQL PoC
This PoC was created in order to figure out GraphQL combined with Apollo. 

## ! Before running the app !
Make sure you add an `.env` file at the root of the project with a "[themoviedb.org](https://www.themoviedb.org/)" API key in this format: `API=xxxxxxx`.

Team developers can find a shared key [here](https://github.com/orgs/macaw-interactive/teams/graphql/discussions/2). 

## Converting GraphQL TypeDefs to Typescript
1. Run the server using `npm run server`. (the schema.json generator uses this server)
2. Run the command to generate the schema.json and the Typescript file: `npm run generate-types`


# GraphQL
<sup>GraphQL is only a _specification_</sup>

## Tutorial
The best tutorial out there to get started ([link](https://https://www.howtographql.com/))

## Concepts
- Schema 
    - Collection of GraphQL types
    - Contract between client and server
- Mutations (Create, update, delete data) ([link](https://graphql.org/learn/queries/#mutations))
- Subscriptions (Real time updates)
- Resolver functions (??)

## Clients
2 major GraphQL clients
- Apollo ([link](https://github.com/apollographql/apollo-client))
- Relay ([link](https://facebook.github.io/relay/))

### Comparison:
__Relay Modern:__
- Very opinionated structure and naming convention ([src](https://blog.smartlogic.io/comparing-relay-modern-and-apollo-graphql-client-frameworks/))
- Takes a little more development time ([src](https://blog.smartlogic.io/comparing-relay-modern-and-apollo-graphql-client-frameworks/))
- Works well with React Native ([src](https://medium.com/@wonderboymusic/upgrading-to-relay-modern-or-apollo-ffa58d3a5d59))

__Apollo:__
- Has an ecosystem around it ([src](https://medium.com/@wonderboymusic/upgrading-to-relay-modern-or-apollo-ffa58d3a5d59))
- Built on top of Redux ([src](https://blog.smartlogic.io/comparing-relay-modern-and-apollo-graphql-client-frameworks/))

### Why GraphQL client?
No need to worry about low-level networking tasks (fetch functions), all you need to do with GraphQL is write a query where you declare your data requirements.

### GraphQL + React
GraphQL clients use the concept of higher-order components to fetch the needed data under the hood and make it available in the `props` of your components.

## Server

## Links
- [Stitch multiple schemas](https://blog.apollographql.com/graphql-schema-stitching-8af23354ac37)
- [Generate Typescript based on .gql schemas](https://github.com/apollographql/apollo-cli) 
    - [This one should also generate something but doesn't seem to work?](https://github.com/dotansimha/graphql-code-generator)
- [JSS + React starter application](https://github.com/Sitecore/jss/tree/master/samples/react)