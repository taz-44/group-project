import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameApi} from "../../Services/game-api";

/**
 * Generated class for the GameReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-reviews',
  templateUrl: 'game-reviews.html',
})
export class GameReviewsPage {
  starRating = 0;

  //game:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    // constructor(public navCtrl: NavController, public navParams: NavParams, gameApi: GameApi) {
    //   gameApi.getGames()

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GameReviewsPage');
  }

  setReview(rating: number){
    this.starRating = rating;


  }

}
