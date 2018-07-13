import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameApi } from '../../Services/game-api';
import { GameReviewsPage } from '../game-reviews/game-reviews';


@IonicPage()
@Component({
  selector: 'page-game-details',
  templateUrl: 'game-details.html',
})
export class GameDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameApi: GameApi) {
  }

  pullDetails() {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailsPage');
    this.gameApi.getGames();
    console.log( this.gameApi );

  }

  toReviewsPage(gameId) {
    this.navCtrl.push(GameReviewsPage, {gameId: gameId});
  }

}
