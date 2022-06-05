import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {MoviesResolver} from "./services/movies.resolver";

const routes: Routes = [
  {path:'', resolve: {moviesData:MoviesResolver},component: MoviesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
