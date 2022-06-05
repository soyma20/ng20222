import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovie} from "../../../interfaces/IMovie";
import {Observable} from "rxjs";
import {urls} from "../../../constants/urls";
import {ISingleMovie} from "../../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getById(id:string):Observable<ISingleMovie>{
    return this.httpClient.get<ISingleMovie>(urls.movie+'/'+id)
  }
}
