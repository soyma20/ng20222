import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/IMovie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[];

  constructor(private movieService:MovieService, private router:Router) { }

  ngOnInit(): void {

    this.movieService.getAll().subscribe(({results}) => this.movies=results)
  }

  next() :void{
    // this.router.navigate<any>('?page=2')
  }
}
