import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameApi } from '../../Services/game-api';
import { GenresProvider } from '../../providers/genres/genres';
import { GameDetailsPage } from '../game-details/game-details';

/**
 * Generated class for the GenrePopulatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genre-populated',
  templateUrl: 'genre-populated.html',
})
export class GenrePopulatedPage {

  // games: Array<any>;
  numberOfGamesToLoad: number = 6;
  genresArray: Array<any> = [];
  currentGenre: string;
  gameIdsofGenre = [];
  gamesArray: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameApi: GameApi, public genresProvider: GenresProvider) {

    // this.gameApi.getGenres().subscribe(data =>{
    //   this.games = data;
    //   for(let i = 0; i < this.games.length; i++){
    //     this.gameApi.getGenresDetails(this.games[i].id).subscribe(data => {
    //       this.gamesArray.push(data[0]);
    //     })
    //   }
    //   console.log(this.gamesArray);
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenrePopulatedPage');
  }

  ionViewDidEnter(){
    console.log(this.gamesArray);
    this.currentGenre = this.genresProvider.currentGenre;
    this.gameIdsofGenre = this.genresProvider.gameIdsofGenre;
    console.log(this.gameIdsofGenre);
    // this.gameIdsofGenre = [100, 66, 53, 13, 69, 434, 612, 4214];
    // setTimeout(function(){
    for(let i = 0; i < this.numberOfGamesToLoad; i++){
      this.gameApi.getGameDetails(this.genresProvider.gameIdsofGenre[i]).subscribe(data =>{
        this.gamesArray.push(data[0]);
      })
    }
  // }, 3000);

  }

  // detailsFunction(game){
  //   this.navCtrl.push(GameDetailsPage)
  // }
}
