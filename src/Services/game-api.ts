import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class GameApi {

  constructor(private http: HttpClient) {
  }

  // private baseUrl = 'https://api-endpoint.igdb.com';
  private baseUrl = 'https://api-2445582011268.apicast.io/genres/meta';

  getGames(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/games/`);
    return this.http.get(`${this.baseUrl}`);
  }


}
