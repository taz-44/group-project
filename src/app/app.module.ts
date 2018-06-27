import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {AuthPage} from "../pages/auth/auth";
import {GameDetailsPage} from "../pages/game-details/game-details";
import {GameReviewsPage} from "../pages/game-reviews/game-reviews";
import {GenresPage} from "../pages/genres/genres";
import {MainPage} from "../pages/main/main";
import {GameApi} from "../Services/game-api";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {HttpClientModule} from "@angular/common/http";


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
    HttpClientModule
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
    GameApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
