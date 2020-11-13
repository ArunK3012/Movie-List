import { Component, OnInit } from '@angular/core';
import { OmdbMovieService } from 'src/app/service/omdb-movie.service';
import { OmdbMovie } from '../interface/movieomdb';

@Component({
  selector: 'app-omdb-movie',
  templateUrl: './omdb-movie.component.html',
  styleUrls: ['./omdb-movie.component.scss']
})
export class OmdbMovieComponent implements OnInit {


  pageNo = 1;
  omdbMovieList: OmdbMovie[];
  constructor(private omdbservice: OmdbMovieService) { }

  ngOnInit(): void {
    this.loadOmdbmovies();
  }

  loadOmdbmovies(): void {
    this.omdbMovieList = [];
    this.omdbservice.getOmdbMovies(this.pageNo).subscribe(response => {
      console.log("RESPONSE", response);
      this.omdbMovieList = response.Search
    })
  }

  paginate(direction) {
    this.pageNo += direction;
    this.loadOmdbmovies();
  }

  saveToWishList(event: MouseEvent, omdbMovie: OmdbMovie): void {
    this.omdbservice.saveOmdbMovie(omdbMovie);
    event.stopPropagation();
  }

  removeWishList(event: MouseEvent, omdbMovie: OmdbMovie): void {
    event.stopPropagation();
  }
}
