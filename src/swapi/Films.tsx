import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { format, parse } from 'date-fns';

export class Films extends React.Component {
    public render() {
        return (
            <Query
                query={gql`
                {
                    getFilms {
                        title
                        release_date,
                        movieDbData {
                            vote_average
                        }
                    }
                }
            `}
            >
                {({ loading, error, data }) => {
                    console.log(loading, error, data);

                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.getFilms.map((film: any, index: number) => (
                        <li key={index}>{film.title} ({this.getYearByDate(film.release_date)}), Rating: {film.movieDbData.vote_average}</li>
                    ));
                }}
            </Query>
        );
    }
    
    private getYearByDate(date: string) {
        console.log(parse(date));
        return format(parse(date), 'YYYY');
    }
}

