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
  gameArray: Array<any> = [];

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
    this.genreId = this.genresProvider.genreId;
    console.log('id:' + this.currentGenre)
    console.log('id:' + this.genreId)

    this.gameApi.getGenresDetails(this.genreId).subscribe( data => {
      this.gameArray = data;
    })
    console.log(this.gameArray);
    }

  }
