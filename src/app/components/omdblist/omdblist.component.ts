import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbMovieService } from 'src/app/service/omdb-movie.service';
import { OmdbMovie } from '../interface/movieomdb';

@Component({
  selector: 'app-omdblist',
  templateUrl: './omdblist.component.html',
  styleUrls: ['./omdblist.component.scss']
})
export class OmdblistComponent implements OnInit {


  omdbList: OmdbMovie;

  constructor(private omdbmovieservice: OmdbMovieService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadOmdbMovie();
  }

  loadOmdbMovie(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.omdbmovieservice.getOmdbMovie(id).subscribe(response => {
      console.log("MOVIE", response);
      this.omdbList = response;
    })
  }

  saveToWishList(omdbmovie: OmdbMovie) {
    this.omdbmovieservice.saveOmdbMovie(omdbmovie);
  }
}
