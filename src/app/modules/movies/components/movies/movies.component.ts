import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {IMovie} from "../../../../interfaces/IMovie";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];

  constructor(private movieService: MoviesService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  page: number = 0;


  async ngOnInit(): Promise<void> {

    this.activatedRoute.data.subscribe(({moviesData}) => {
      this.movies = moviesData.results;
      this.page = moviesData.page
    })
    await this.activatedRoute.queryParams.subscribe(({page}) => this.page = page)
    this.movieService.getAll(this.page).subscribe(({results, page}) => {
      this.movies = results;
      this.page = page
    })
  }


  next(): void {
    const nextPage = ++this.page
    const queryParams: Params = {page: this.page};
    this.router.navigate(
      [],
      {relativeTo: this.activatedRoute, queryParams, queryParamsHandling: 'merge',});
    this.movieService.getAll(this.page).subscribe(({results}) => this.movies = results)
  }

  prev(): void {

    const nextPage = --this.page
    const queryParams: Params = {page: nextPage};
    this.router.navigate(
      [],
      {relativeTo: this.activatedRoute, queryParams, queryParamsHandling: 'merge',});
    this.movieService.getAll(this.page).subscribe(({results}) => this.movies = results)


  }
}
