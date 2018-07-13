import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthPage} from "../pages/auth/auth";
import {GameDetailsPage} from "../pages/game-details/game-details";
import {GameReviewsPage} from "../pages/game-reviews/game-reviews";
import {GenresPage} from "../pages/genres/genres";
import {MainPage} from "../pages/main/main";


import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";


import { AngularFireDatabase } from "angularfire2/database";

import { AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { AngularFirestoreCollection} from "angularfire2/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyB-RxllyvA2fZi3z6Mfs_70_Fwy1VcmNhw",
  authDomain: "angulargroupproject.firebaseapp.com",
  databaseURL: "https://angulargroupproject.firebaseio.com",
  projectId: "angulargroupproject",
  storageBucket: "angulargroupproject.appspot.com",
  messagingSenderId: "40781239708"
};

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    GameDetailsPage,
    GameReviewsPage,
    GenresPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule,



    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),

    AngularFireAuthModule
  ],


  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    GameDetailsPage,
    GameReviewsPage,
    GenresPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
