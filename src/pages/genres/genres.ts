import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
// import { GenresProvider } from '../../providers/genres/genres';
import { GameApi } from '../../Services/game-api';
// import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the GenresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genres',
  templateUrl: 'genres.html',
})
export class GenresPage {
  genres: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: GameApi) {
    this.genres = this.apiProvider.getGames();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenresPage');
    console.log(this.genres);
  }

  doSomething(){
    console.log("hi");
  }

  ionViewDidEnter(){
    this.menu.open();
  }
}
