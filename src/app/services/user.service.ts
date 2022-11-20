import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../_models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://random-data-api.com/api/v2/users"

  constructor(
    private http: HttpClient
  ) { }

  getUser():Observable<User>
  {
    return this.http.get<User>(this.url)
  }
}
