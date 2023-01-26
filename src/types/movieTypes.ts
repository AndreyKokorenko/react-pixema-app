export interface IMovieAPI {
  Response: string;
  Search: IMovieSearchAPI[];
  totalResults: number;
  Error?: string;
}
export interface IMovie {
  response: boolean;
  search: IMovieSearch[];
  totalResults: number;
}

export interface IMovieSearchAPI {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export interface IMovieSearch {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export interface IMovieDetailsAPI {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Poster: string;
  Country: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
}

export interface IMovieDetails {
  title: string;
  year: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  awards: string;
  poster: string;
  country: string;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
}

export enum Param {
  Id = "i",
  Title = "t",
  Type = "type",
  Year = "y",
  Plot = "plot",
  Search = "s",
  Page = "page",
}
export interface IOption {
  value: string;
  label: string;
}
