import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as igdb from "../../secure-stuff/igdbKey";


@Injectable()
export class GameApi {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://api-endpoint.igdb.com';

  getGames(): Observable<any> {

    return this.http.get(`${this.baseUrl}/games/`, {headers : new HttpHeaders().set("user-key", igdb.default)});

  }

  getGameDetails(gameId): Observable<any> {

    return this.http.get(`${this.baseUrl}/games/${gameId}`, {headers : new HttpHeaders().set("user-key", igdb.default)})

  }

  getGenres(): Observable<any> {

    return this.http.get(`${this.baseUrl}/genres/`, {headers : new HttpHeaders().set("user-key", igdb.default)})

  }

  getGenresDetails(genreId): Observable<any> {

    return this.http.get(`${this.baseUrl}/genres/${genreId}`, {headers : new HttpHeaders().set("user-key", igdb.default)})

  }




}
