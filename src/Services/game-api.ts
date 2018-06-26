import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class GameApi {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://api-endpoint.igdb.com';

  getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}/games/`);
  }


}
