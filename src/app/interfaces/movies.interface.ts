export interface MovieInterface {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
  
  export interface MovieResponseInterface {
    Response: string;
    Search: MovieInterface[];
    totalResults: string;
  }
  
  export interface MovieDetailInterface {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: RatingInterface[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
  }
  
  interface RatingInterface {
    Source: string;
    Value: string;
  }