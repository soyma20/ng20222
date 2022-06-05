import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {HttpModule} from "../../http.module";



@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpModule
  ],
  providers:[]
})
export class MovieModule { }
