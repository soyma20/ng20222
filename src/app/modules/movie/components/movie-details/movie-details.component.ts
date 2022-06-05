import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {ISingleMovie} from "../../../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: ISingleMovie;
  _baseUrl : string='https://image.tmdb.org/t/p/original'

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.id = id)
    this.movieService.getById(this.id).subscribe(value => this.movie=value)

  }

}
