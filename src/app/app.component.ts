import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, NavController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFirestore} from "angularfire2/firestore";


import {AuthPage} from "../pages/auth/auth";
// <<<<<<< HEAD
import { MainPage } from '../pages/main/main';
import { GenresProvider } from '../providers/genres/genres';
import { GameApi } from '../Services/game-api';
import { GenresPage } from '../pages/genres/genres';
import { GenrePopulatedPage } from '../pages/genre-populated/genre-populated';
// =======
import {GameReviewsPage} from "../pages/game-reviews/game-reviews";
// >>>>>>> 76e1cae5cbecba6bb4f2c3c3d8f707d525364ce5

//eniig 11nd nemev uuruu
import {AngularFireDatabase} from 'angularfire2/database';

import { Observable} from "rxjs/Observable";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

// <<<<<<< HEAD
  genres: any;
  genresArray = [];
  rootPage: any = AuthPage; 
  currentGenre;
// =======
  // rootPage: any = AuthPage;
  // rootPage: any = AuthPage;
// >>>>>>> 76e1cae5cbecba6bb4f2c3c3d8f707d525364ce5


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menuCtrl: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen, public gameApi: GameApi, public genresProvider: GenresProvider, public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

    {title: "Genres Page", component: GenresPage}

    ];
    // this.gameApi.getGenres().subscribe(data =>{
    //   this.genres = data;
    //   console.log(this.genres);
    //   for(let i = 0; i < this.genres.length; i++){
    //     this.gameApi.getGenresDetails(this.genres[i].id).subscribe(data =>{
    //       this.genresArray.push(data[0])
    //     })
    //   }
    //   // console.log(this.genresArray);
    // })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.menuCtrl.open();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  genrePopulate(genreSelect){
    this.currentGenre = genreSelect.value;
    this.genresProvider.currentGenre = genreSelect.value;
    this.updateGenre(genreSelect.value);
    // this.nav.setRoot(GenresPage);
  }

  updateGenre(currentGenre){
    this.events.publish('updatedGenre', currentGenre);
    console.log(currentGenre);
  }
}
