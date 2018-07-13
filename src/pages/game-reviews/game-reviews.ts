import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameApi} from "../../Services/game-api";

import { AngularFireDatabase} from "angularfire2/database";
import { Observable} from "rxjs/Observable";

import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { map} from "rxjs/operators"

/**
 * Generated class for the GameReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//bi nemsen
  export interface Reviews {
    review: string;
    title: string;
    stars: number;
    date: Date

}

@IonicPage()
@Component({
  selector: 'page-game-reviews',
  templateUrl: 'game-reviews.html',
})


export class GameReviewsPage {
    review: Reviews = {
      title: "",
      review: "",
      stars: 0,
      date: new Date()
    };

  private reviewsCollection: AngularFirestoreCollection<Reviews>;
  reviews: Observable<Reviews[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore) {
    this.reviewsCollection = afs.collection<Reviews>('reviews');
    this.reviews = this.reviewsCollection.valueChanges();


  }

  addItem() {
    this.reviewsCollection.add(this.review);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameReviewsPage');
  }

  setReview(rating: number) {
    this.review.stars = rating;
  }

  // saveProduct(product:ProductId){
  //   this.productCollection.doc(product.id).push(product);
  //}


  //db.collection('reviews').

}
