import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule , AngularFireDatabase } from "angularfire2/database";
import { AngularFirestoreCollection} from "angularfire2/firestore";

import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthPage} from "../pages/auth/auth";
import {GameDetailsPage} from "../pages/game-details/game-details";
import {GameReviewsPage} from "../pages/game-reviews/game-reviews";
import {GenresPage} from "../pages/genres/genres";
import {MainPage} from "../pages/main/main";
import { GameApi } from '../Services/game-api';
import { MyApp } from './app.component';
import { environment } from '../environment/environment';
import { GenresProvider } from '../providers/genres/genres';
import { GenrePopulatedPage } from '../pages/genre-populated/genre-populated';
// import { GenresProvider } from '../providers/genres/genres';


@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    GameDetailsPage,
    GameReviewsPage,
    GenresPage,
    MainPage,
    GenrePopulatedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ''
    }),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    GameDetailsPage,
    GameReviewsPage,
    GenresPage,
    MainPage,
    GenrePopulatedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GameApi,
    AngularFireDatabase,
    Facebook,
    GenresProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
