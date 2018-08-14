import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import { ApolloProvider, Query } from 'react-apollo';

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

export class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Query
                    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.rates.map(({ currency, rate }) => (
                            <div key={currency}>
                                <p>{`${currency}: ${rate}`}</p>
                            </div>
                        ));
                    }}
                </Query>
            </ApolloProvider>
        );
    }
}