import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameApi } from '../../Services/game-api';
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

  //Game title will be getting fed from genres page
  constructor(public navCtrl: NavController, public navParams: NavParams, gameApi: GameApi) {
    gameApi.getGames();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailsPage');
  }

}
