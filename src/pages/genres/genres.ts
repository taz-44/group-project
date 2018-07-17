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
  genresNameId = [
    {
    'name': "Real Time Strategy (RTS)",
    'id': 11
  },
  {
  'name': "Puzzle",
  'id': 9
},
{
'name': "Hack and Slash",
'id': 25
},
{
'name': "Pinball",
'id': 30
},
{
'name': "Role-Playing-RPG",
'id': 12
},
{
'name': "Adventure",
'id': 31
},
{
'name': "Shooter",
'id': 5
},
{
'name': "Music",
'id': 7
},
{
'name': "Puzzle",
'id': 9
},
{
'name': "Point-and-Click",
'id': 2
},
{
'name': "Puzzle",
'id': 9
},
{
'name': "Simulator",
'id': 13
},
{
'name': "Quiz/Trivia",
'id': 26
},
{
'name': "Arcade",
'id': 33
},
{
'name': "Tactical",
'id': 24
},
{
'name': "Fighting",
'id': 4
},
{
'name': "Strategy",
'id': 15
},
{
'name': "Racing",
'id': 10
},
{
'name': "Platform",
'id': 8
},
{
'name': "Sport",
'id': 14
},
{
'name': "Indie",
'id': 32
},
{
'name': "Turn-based",
'id': 16
}];


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public gameApi: GameApi,
    public genresProvider: GenresProvider,
    public events: Events
      ) {}


  goToGenresPopulate(genre){
    console.log(genre.name);
    this.genresProvider.genreId = genre.id;
    this.genresProvider.currentGenre = genre.name
    this.navCtrl.push(GenrePopulatedPage)

  }
}
