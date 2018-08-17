

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFilms
// ====================================================

export interface getFilms_getFilms_planets {
  name: string | null;
}

export interface getFilms_getFilms_movieDbData {
  vote_average: number | null;
}

export interface getFilms_getFilms {
  title: string | null;
  episode_id: number | null;
  release_date: string | null;
  planets: (getFilms_getFilms_planets | null)[] | null;
  movieDbData: getFilms_getFilms_movieDbData | null;
}

export interface getFilms {
  getFilms: (getFilms_getFilms | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================