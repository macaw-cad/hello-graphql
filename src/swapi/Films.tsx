import * as React from 'react';
import { Query } from 'react-apollo';
import { format, parse } from 'date-fns';
import query from '../data/swapi/schema.gql';
import { getFilms_getFilms } from '../types/types';

export class Films extends React.Component {
    public render() {
        return (
            <Query
                query={query}
            >
                {({ loading, error, data }) => {
                    console.log(loading, error, data);

                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.getFilms.map((film: getFilms_getFilms, index: number) => (
                        <li key={index}>{film.title} ({this.getYearByDate(film.release_date)})</li>
                    ));
                }}
            </Query>
        );
    }
    
    private getYearByDate(date: string | null): string {
        if (date) {
            return format(parse(date), 'YYYY');
        }

        return '';
    }
}

