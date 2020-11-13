import { Component, OnInit } from '@angular/core';
import { OmdbMovieService } from 'src/app/service/omdb-movie.service';
import { OmdbMovie } from '../interface/movieomdb';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  omdbList: OmdbMovie[];
  constructor(private omdbmovieservice: OmdbMovieService) { }

  ngOnInit(): void {
    this.omdbList = this.omdbmovieservice.favouriteList();
  }


  clearFavourite(event: MouseEvent, omdbmovie: OmdbMovie): void {
    event.stopPropagation();
    this.omdbmovieservice.removeMovie();
  }
}
