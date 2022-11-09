import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey = environment.apiKey;
  apiFlm = environment.apiFilm;
  apiSch = environment.apiSearch;

  constructor(private http: HttpClient) { }

  getMoviesWithSearch(search: string): Observable<any> {
    search = search.replace(/ /g, "+");
    return this.http.get(this.apiSch+search+this.apiKey);
  }

  getMovieWhithCard(name: string): Observable<any>{
    name = name.replace(/ /g, "+");
    return this.http.get(this.apiFlm+name+this.apiKey);
  }
}
