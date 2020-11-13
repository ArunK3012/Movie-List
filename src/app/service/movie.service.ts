import { Injectable } from '@angular/core';
import { MOVIE } from '../components/movie/movielist';
import { Movie } from '../components/interface/moviemodule';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
  constructor() { }

  getMovies(): Movie[] {
    return MOVIE;
  }

  getMovie(id: string): Movie {
    return MOVIE.find(movie => movie.id === id);
  }
}
