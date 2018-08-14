import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export class ShipsPilots extends React.Component {
    render() {
        return (
            <Query
                query={gql`
                {
                    getStarships {
                        name,
                        pilots {
                        name
                        }
                    }
                }
            `}
            >
                {({ loading, error, data }) => {
                    console.log(loading, error, data);

                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return <p>Hi</p>;
                }}
            </Query>
        );
    }
}

