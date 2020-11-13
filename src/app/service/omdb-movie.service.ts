import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OmdbMovie } from '../components/interface/movieomdb';


@Injectable({
  providedIn: 'root'
})
export class OmdbMovieService {

  baseUrl = 'http://www.omdbapi.com/';
  apiKey = 'apikey=7dee3a19';

  constructor(private httpclient: HttpClient) { }

  getOmdbMovies(page): Observable<any> {
    const url = `${this.baseUrl}?s=avengers&page=${page}&${this.apiKey}`;
    return this.httpclient.get(url);
  }

  getOmdbMovie(id): Observable<any> {
    const url = `${this.baseUrl}?i=${id}&${this.apiKey}`;
    return this.httpclient.get(url);
  }

  saveOmdbMovie(omdbmovie: OmdbMovie): void {
    let savedList = JSON.parse(localStorage.getItem('favourites')) || [];
    savedList.push(omdbmovie);
    localStorage.setItem('favourites', JSON.stringify(savedList));
  }

  favouriteList(): OmdbMovie[] {
    let savedList = JSON.parse(localStorage.getItem('favourites')) || [];
    return savedList;
  }

  removeMovie(): void {
    localStorage.clear();
  }
}
