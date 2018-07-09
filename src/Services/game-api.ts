import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

    return this.http.get(`${this.baseUrl}/genres/?fields=*&limit=30`, {headers : new HttpHeaders().set("user-key", igdb.default)})

  }


  getPopularGames(): Observable<any>{

    return this.http.get(`${this.baseUrl}/games/?fields=name,popularity&order=popularity:desc&limit=20`)

  }

  getUpcomingGames(): Observable<any>{

    let d = new Date();
    let n = d.getTime();

    return this.http.get(`${this.baseUrl}/release_dates/?fields=*&order=date:asc&filter[date][gt]=${n}&expand=game&limit=20`);

  }




}
