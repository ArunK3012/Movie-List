import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MovietrailerComponent } from './components/movietrailer/movietrailer.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie', pathMatch: 'full'},
  {path: 'movie', component: MovieComponent},
  {path: 'movie/:movieid', component: MovietrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
