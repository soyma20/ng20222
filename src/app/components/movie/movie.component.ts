import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  _baseUrl : string='https://image.tmdb.org/t/p/original';

  @Input()
  movie:IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
