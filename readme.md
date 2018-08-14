# GraphQL
<sup>GraphQL is only a _specification_</sup>

## Concepts
- Schema 
    - Collection of GraphQL types
    - Contract between client and server
- Mutations (Create, update, delete data) ([link](https://graphql.org/learn/queries/#mutations))
- Subscriptions (Real time updates)
- Resolver functions (??)
- 

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
