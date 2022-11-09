import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { MovieDetailInterface } from "../../interfaces/movie.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: MovieDetailInterface | undefined;
  breakpoint: number = 0;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 425) ? 1 : (window.innerWidth <= 768) ? 2 : 3;

    this.moviesService.getMovieByID(this.route.snapshot.params['id']).subscribe((movie: MovieDetailInterface) => {
      this.detail = movie;
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 425) ? 1 : (event.target.innerWidth <= 768) ? 2 : 4;
  }

  genreToString() {
    return this.detail?.Genre.replace(/, /g, '/');
  }
}
