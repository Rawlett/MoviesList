import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  film: any;
  breakpoint: number = 0;
  

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 425) ? 1 : (window.innerWidth <= 768) ? 2 : 4;

    this.moviesService.getMovieWhithCard(environment.film).subscribe(data => {
      this.film = data;
      console.log(this.film);
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 425) ? 1 : (event.target.innerWidth <= 768) ? 2 : 4;
  }

  genreToString() {
    return this.film.Genre.replace(/, /g, '/');
  }
}
