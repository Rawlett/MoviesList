import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {MovieDetailInterface, MovieInterface, MovieResponseInterface} from "../interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey = environment.apiKey;
  apiFlm = environment.apiFilm;
  apiSch = environment.apiSearch;

  constructor(private http: HttpClient) { }

  getMoviesWithSearch(search: string): Observable<MovieInterface[]> {
    search = search.replace(/ /g, "+");
    return this.http.get<MovieResponseInterface>(this.apiSch+search+this.apiKey).pipe(
      map((data: MovieResponseInterface) => {
        return data.Search
      }));
  }

  getMovieByID(name: string): Observable<MovieDetailInterface> {
    name = name.replace(/ /g, "+");
    return this.http.get<MovieDetailInterface>(this.apiFlm+name+this.apiKey).pipe(
      map((data: MovieDetailInterface) => {
        return data
      }));
  }
}
