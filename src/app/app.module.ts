import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MainInterceptor} from "./main.interceptor";
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MoviesComponent,
    MovieComponent,
    SideBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
