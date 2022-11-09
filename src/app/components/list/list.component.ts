import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  films: any;
  cards: any;
  busqueda: string = "";
  breakpoint: number = 0;

  constructor(public moviesService: MoviesService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 425) ? 1 : (window.innerWidth <= 768) ? 2 : (window.innerWidth <= 1024) ? 3 : 4;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 425) ? 1 : (event.target.innerWidth <= 768) ? 2 : (event.target.innerWidth <= 1024) ? 3 : 4;
  }

  getMovies(){
    this.moviesService.getMoviesWithSearch(this.busqueda).subscribe(data => {
      this.films = data.Search;
      //console.log(this.films);
      /** Based on the screen size, switch from standard to one column per row */
      this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(() => {
          return this.films;
        })
      );
    });
  }

  setFilm(film: string){
    environment.film = film;
  }
}
