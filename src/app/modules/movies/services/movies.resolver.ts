import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MoviesService} from "./movies.service";
import {IResponseMovie} from "../../../interfaces/IResponseMovie";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<IResponseMovie>{
  pageForService:number;

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponseMovie> | Promise<IResponseMovie> | IResponseMovie {
    return this.movieService.getAll(this.pageForService);
  }


}
