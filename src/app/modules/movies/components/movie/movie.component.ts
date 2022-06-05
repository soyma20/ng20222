import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../../interfaces/IMovie";
import {GenresService} from "../../../../services/genres.service";
import {IGenre} from "../../../../interfaces/IGenre";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  _baseUrl: string = 'https://image.tmdb.org/t/p/original';

  @Input()
  movie: IMovie;
  movieGenreIds: any[]
  genres: IGenre[];
  movieGenres: IGenre[]=[];


  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.movieGenreIds = this.movie.genre_ids
    this.genresService.getAll().subscribe(({genres}) => {
      this.genres = genres
      for (const movieGenreId of this.movieGenreIds) {
        for (const genre of genres) {
          if (genre.id === movieGenreId) {
            this.movieGenres.push(genre)
          }
        }
      }
    })


  }

}
