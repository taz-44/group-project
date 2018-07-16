import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { GameApi } from '../../Services/game-api';
import { GenresProvider } from '../../providers/genres/genres';
import { GenrePopulatedPage } from '../genre-populated/genre-populated';


@IonicPage()
@Component({
  selector: 'page-genres',
  templateUrl: 'genres.html',
})
export class GenresPage {

  genres:any;
  genresArray: Array<any> = [];
  // currentGenre;


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
          for(let i = 0; i < this.genres.length; i++){
            this.gameApi.getGenresDetails(this.genres[i].id).subscribe(data =>{
              this.genresArray.push(data[0])
            })
          }
          console.log(this.genresArray);
        this.genresProvider.genres = this.genresArray;
        })

        // events.subscribe('updateGenre', (currentGenre) =>{
        //   console.log(currentGenre);
        //   this.currentGenre = currentGenre;
        // })

      }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GenresPage');
  //   console.log(this.genres);
  //   // this.selectedGenre = this.genresProvider.currentGenre;
  // }

  // ionViewDidEnter(){
  //   console.log('entered genres.ts');
  // }


  goToGenresPopulate(genre){
    for(let i = 0; i < this.genresArray.length; i++){
        if(this.genresArray[i].name.toString() === genre.name.toString()){
          this.genresProvider.gameIdsofGenre.push(this.genresArray[i].games);
        }
    }
    console.log(this.genresProvider.gameIdsofGenre);

    // console.log(genre.name);
    this.genresProvider.currentGenre = genre.name;
    this.navCtrl.push(GenrePopulatedPage)

  }
}
