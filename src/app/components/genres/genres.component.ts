import { Component, OnInit } from '@angular/core';
import {GenresService} from "../../services/genres.service";
import {IGenre} from "../../interfaces/IGenre";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres:IGenre[];

  constructor(private genresService:GenresService) { }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(({genres}) => this.genres=genres)

  }

}
