import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export class Films extends React.Component {
    render() {
        return (
            <Query
                query={gql`
                {
                    getFilms {
                        title
                        director
                        release_date
                    }
                }
            `}
            >
                {({ loading, error, data }) => {
                    console.log(loading, error, data);

                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.getFilms.map((film: any, index: number) => (
                        <li key={index}>{film.title}</li>
                    ));
                }}
            </Query>
        );
    }
}

