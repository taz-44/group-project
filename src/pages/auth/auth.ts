import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameApi} from "../../Services/game-api";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { auth } from "firebase";
import { MainPage } from "../main/main";

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [AngularFireAuth],
})
export class AuthPage {

  displayName;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private platform: Platform)
  {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }
  gameData: any;

  signOut() {
    this.afAuth.auth.signOut();
  }

  continueToApp(displayName){
    this.navCtrl.push(MainPage, {
      name: displayName
    })
  }

  continueWithoutLogin(){
    this.navCtrl.push(MainPage, {
      name: 'GuesUser'
    })
  }


}
