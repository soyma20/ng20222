import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {HttpParams} from "@angular/common/http";
import {HttpModule} from "../../http.module";
import {MoviesResolver} from "./services/movies.resolver";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpModule
  ],
  providers:[
    HttpParams,
    MoviesResolver
  ]
})
export class MoviesModule { }
