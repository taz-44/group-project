import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GenresProvider {

  genres = [];
  currentGenre: string;
  genreId: number;
  gameIdsofGenre = [];

  constructor(public http: HttpClient) {}


}
