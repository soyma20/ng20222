import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {MoviesComponent} from './modules/movies/components/movies/movies.component';
import {MovieComponent} from './modules/movies/components/movie/movie.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {HttpModule} from "./http.module";
import {GenresComponent} from "./components/genres/genres.component";
import {GenreComponent} from "./components/genre/genre.component";
import {UserComponent} from "./components/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MoviesComponent,
    MovieComponent,
    SideBarComponent,
    GenresComponent,
    GenreComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
