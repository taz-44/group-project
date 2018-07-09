import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GenresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenresProvider {

  genres = <any> [];

  constructor(public http: HttpClient) {

  }
  getGenres(){
    
    return this.http.get('https://api-2445582011268.apicast.io/genres/meta');
  }
}
