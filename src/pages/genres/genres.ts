import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { GameApi } from '../../Services/game-api';
import { GenresProvider } from '../../providers/genres/genres';


@IonicPage()
@Component({
  selector: 'page-genres',
  templateUrl: 'genres.html',
})
export class GenresPage {

  genres:any;
  genresArray: Array<any> = [];
  currentGenre;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public gameApi: GameApi,
    public genresProvider: GenresProvider,
    public events: Events
      ) {
        this.gameApi.getGenres().subscribe(data =>{
          this.genres = data;
          console.log(this.genres);
          for(let i = 0; i < this.genres.length; i++){
            this.gameApi.getGenresDetails(this.genres[i].id).subscribe(data =>{
              this.genresArray.push(data[0])
            })
          }
          console.log(this.genresArray);
        })

        this.genresProvider.genres = this.genresArray;


        events.subscribe('updateGenre', (currentGenre) =>{
          console.log(currentGenre);
          this.currentGenre = currentGenre;
        })

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenresPage');
    // console.log(this.genres);
    // this.selectedGenre = this.genresProvider.currentGenre;
  }

  ionViewDidEnter(){
    this.menuCtrl.open();
    console.log('hi');
  }

  openMenu(){
    this.menuCtrl.open();
  }
}
