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
  gameDetails: any;
  gameDetailsName: string;
  gameDetailsSummary: string;
  gameSelected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameApi: GameApi) {
    this.gameSelected = this.navParams.data;

    this.gameApi.getGameDetails(this.gameSelected.gameId).subscribe( data =>{
      this.gameDetails = data;
      console.log(data);
      this.gameDetailsName = this.gameDetails.name;
      this.gameDetailsSummary = this.gameDetails.summary;
    })

    console.log(this.gameSelected);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailsPage');
  }

  toReviewsPage(gameId) {
    this.navCtrl.push(GameReviewsPage, {gameId: gameId});
  }

}
