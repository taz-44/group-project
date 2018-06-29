import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as igdb from "../../secure-stuff/igdbKeys"


@Injectable()
export class GameApi {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://api-endpoint.igdb.com';

  getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}/games/`, {headers : new HttpHeaders().set("user-key", igdb.default)});
  }


}
