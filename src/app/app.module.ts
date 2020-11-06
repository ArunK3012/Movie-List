import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovietrailerComponent } from './components/movietrailer/movietrailer.component';
import { FormsModule } from '@angular/forms';

@NgModule ({
  declarations: [
    AppComponent,
    MovieComponent,
    MovietrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
