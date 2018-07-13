import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameApi } from '../../Services/game-api';
import { GameReviewsPage } from '../game-reviews/game-reviews';
//Anticipate an import from game genres to feed in specific game id

/**
 * Generated class for the GameDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-details',
  templateUrl: 'game-details.html',
})
export class GameDetailsPage {

  //Game id will be getting fed from genres page
  constructor(public navCtrl: NavController, public navParams: NavParams, private gameApi: GameApi) {
  }

  pullDetails() {
    let details: any = this.gameApi.getGames().subscribe()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailsPage');
    this.gameApi.getGames();
    console.log( this.gameApi );

  }

  toReviewsPage(gameId) {
    this.navCtrl.push(GameReviewsPage, {gameId: gameId});
  }

}
