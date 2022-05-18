import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(urls.users)
  }

  getById(id: string): Observable<IUser> {
    return this.http.get<IUser>(urls.users + '/' + id)
  }

}
