import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import { ShipsPilots } from './swapi/ShipsPilots';
import { Films } from './swapi/Films';

const client = new ApolloClient({
    uri: 'http://localhost:4000'
});

export class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <React.Fragment>
                    <h1>Swapi</h1>
                    <Films />
                    {/* <ShipsPilots /> */}
                </React.Fragment>
            </ApolloProvider>
        );
    }
}