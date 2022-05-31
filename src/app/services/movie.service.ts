import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants/urls";
import {IResponseMovie} from "../interfaces/IResponseMovie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(page:number=1): Observable<IResponseMovie> {
    return this.httpClient.get<IResponseMovie>(urls.movies)
  }

}
