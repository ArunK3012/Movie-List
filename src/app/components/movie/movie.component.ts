import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/moviemodule';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie = {
    title: '',
    year: '',
    rating: 0,
    imageUrl: '',
    id: '',
    trailer: '',
    albums: '',
  };

  movieList: Movie[];

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieList = this.movieservice.getMovies();
  }

  save(): void {
    this.movie.id = this.randomString();
    const tempfilm: Movie = { ...this.movie };
    this.movieList.unshift(tempfilm);
  }

  randomString(): string {
    return Math.floor(Math.random() * Math.floor(30000)).toString();
  }
}
