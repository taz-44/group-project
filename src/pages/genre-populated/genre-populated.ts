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

  currentGenre: string;
  genreId: number;
  gameArray: Array<any>;
//   [{'name':'gay ass game',
// 'cover':{
//   'url':'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426'
// }}];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameApi: GameApi,
    public genresProvider: GenresProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenrePopulatedPage');
  }

  ionViewDidEnter(){
    this.currentGenre = this.genresProvider.currentGenre;
    // this.currentGenre = "cool";
    this.genreId = this.genresProvider.genreId;
    console.log('id:' + this.currentGenre)
    console.log('id:' + this.genreId)

    this.gameApi.getGenresDetails(this.genreId).subscribe( data => {
      this.gameArray = data;
    })
    console.log(this.gameArray);
    }

  }
