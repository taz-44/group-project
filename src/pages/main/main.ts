import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { GameApi } from "../../Services/game-api";
import {HttpClient} from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  games:any;

  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public gameApi: GameApi) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.gameApi.getGames().subscribe(data =>{
      this.games = data;
      console.log(this.games);
    })
    this.gameApi.getPopularGames().subscribe()
  }


  logout() {
    this.afAuth.auth.signOut();
  }

}
