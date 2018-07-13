import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { GameApi } from "../../Services/game-api";
import {HttpClient} from "@angular/common/http";
import {GameDetailsPage} from "../game-details/game-details";
import {GenresPage} from "../genres/genres";


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  popularGames:any;
  popularGamesArray: Array<any> = [];
  upcomingGames: Array<any>;
  upcomingGamesArray: Array<any> = [];
  recentlyReleasedGames: Array<any>;
  recentlyReleasedGamesArray: Array<any> = [];


  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public gameApi: GameApi) {

    //API CALL FOR POPULAR GAMES
    this.gameApi.getPopularGames().subscribe( data =>{
      this.popularGames = data;
      for(let i = 0; i < this.popularGames.length; i++){
        this.gameApi.getGameDetails(this.popularGames[i].id).subscribe( data => {
          this.popularGamesArray.push(data[0]);
        });
      }
      console.log("popular games");
      console.log(this.popularGamesArray);
    });

    //API CALL FOR RECENTLY RELEASES GAMES
    this.gameApi.getRecentGames().subscribe( data => {
      this.recentlyReleasedGames = data;
      for(let i = 0; i < this.recentlyReleasedGames.length; i++) {
        if (this.recentlyReleasedGames[i].game.cover !== undefined) {

          this.recentlyReleasedGamesArray.push(this.recentlyReleasedGames[i]);
        }
      }
      this.recentlyReleasedGamesArray = this.removeDuplicates(this.recentlyReleasedGamesArray,'game', 'name');

      console.log("recent games");
      console.log(this.recentlyReleasedGames);
    });

    //API CALL FOR UPCOMING GAMES
    this.gameApi.getUpcomingGames().subscribe( data => {
      this.upcomingGames = data;
      for(let i = 0; i < this.upcomingGames.length; i++){
        this.upcomingGamesArray.push(this.upcomingGames[i]);
      }
      this.upcomingGamesArray = this.removeDuplicates(this.upcomingGamesArray, 'game', 'name');

      console.log("upcoming games");
      console.log(this.upcomingGames);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  removeDuplicates(myArr, prop, cProp) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop][cProp]).indexOf(obj[prop][cProp]) === pos;
    });
  }

  clickedGame(gameId){
    this.navCtrl.push(GameDetailsPage, {
      gameId: gameId
    })
  }

  goToGenres(){
    this.navCtrl.push(GenresPage)
  }


  logout() {
    this.afAuth.auth.signOut();
  }

}
