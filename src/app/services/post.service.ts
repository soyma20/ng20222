import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../models";
import {urls} from "../constants/urls";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) {

  }
  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts)
  }

  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(urls.posts + '/' + id)
  }
}
