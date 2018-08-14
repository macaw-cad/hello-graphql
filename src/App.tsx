import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ShipsPilots } from './swapi/ShipsPilots';

const client = new ApolloClient({
    uri: 'http://localhost:4000'
});

export class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <React.Fragment>
                    <h1>Ships + pilots</h1>
                    <ShipsPilots />
                </React.Fragment>
            </ApolloProvider>
        );
    }
}