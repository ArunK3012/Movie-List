import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovietrailerComponent } from './components/movietrailer/movietrailer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { OmdbMovieComponent } from './components/omdb-movie/omdb-movie.component';
import { OmdblistComponent } from './components/omdblist/omdblist.component';
import { FavouriteComponent } from './components/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovietrailerComponent,
    HeaderComponent,
    OmdbMovieComponent,
    OmdblistComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
