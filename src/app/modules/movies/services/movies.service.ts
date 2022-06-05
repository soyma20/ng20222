import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../constants/urls";
import {IResponseMovie} from "../../../interfaces/IResponseMovie";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MoviesService{
  page2:number;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {

  }


  getAll(page:number): Observable<IResponseMovie> {
    const params = new HttpParams().set('page', page)
    return this.httpClient.get<IResponseMovie>(urls.movies,{params})
  }
}
