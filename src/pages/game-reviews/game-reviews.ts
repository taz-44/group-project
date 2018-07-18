import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameApi} from "../../Services/game-api";

import { Observable} from "rxjs/Observable";
import { map} from "rxjs/operators"

import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { AngularFireDatabase} from "angularfire2/database";



export interface Reviews {
  review: string;
  title: string;
  stars: number;
  date: Date;
  gameId: any;
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
    date: new Date(),
    gameId: this.navParams.data.gameId
  };
  reviewsArray:any;
  filteredArray:any;


  private reviewsCollection: AngularFirestoreCollection<Reviews>;
  reviews: Observable<Reviews[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore) {
    this.reviewsCollection = afs.collection<Reviews>('reviews');
    this.reviews = this.reviewsCollection.valueChanges();
    this.reviews.subscribe(data =>{
      this.reviewsArray = data;
      console.log(this.reviewsArray);
      this.filteredArray = this.filterReviews(this.reviewsArray);
    });


  }

  addItem() {
    this.reviewsCollection.add(this.review);
  }

  filterReviews(myArr) {
    return myArr.filter((item) => {
      return item.gameId === this.navParams.data.gameId
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameReviewsPage');
  }

  setReview(rating: number) {
    this.review.stars = rating;
  }

  close(){
    this.navCtrl.pop();
  }
}
