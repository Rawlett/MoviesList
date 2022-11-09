import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import {MovieInterface} from "../../interfaces/movies.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  cards: MovieInterface[] = [];
  busqueda: string = '';
  breakpoint: number = 0;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 425) ? 1 : (window.innerWidth <= 768) ? 2 : (window.innerWidth <= 1024) ? 3 : 4;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 425) ? 1 : (event.target.innerWidth <= 768) ? 2 : (event.target.innerWidth <= 1024) ? 3 : 4;
  }

  getMovies(search: string){
    this.moviesService.getMoviesWithSearch(search).subscribe((movies: MovieInterface[]) => {
      console.log('DATA:', movies)
      this.cards = movies;
    });
  }

  goMovieDetail(movie: MovieInterface){
    this.router.navigate(['detail/' + movie.imdbID]);
  }
}
