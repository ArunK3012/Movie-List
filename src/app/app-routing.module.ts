import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { OmdbMovieComponent } from './components/omdb-movie/omdb-movie.component';
import { OmdblistComponent } from './components/omdblist/omdblist.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'omdb', component: OmdbMovieComponent },
  { path: 'omdb/:id', component: OmdblistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
