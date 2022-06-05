import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre} from "../interfaces/IGenre";
import {urls} from "../constants/urls";
import {IResponseGenre} from "../interfaces/IResponseGenre";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) {

  }
  getAll():Observable<IResponseGenre>{
    return this.httpClient.get<IResponseGenre>(urls.genres)
  }


}
