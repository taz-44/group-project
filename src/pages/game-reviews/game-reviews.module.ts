import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameReviewsPage } from './game-reviews';

@NgModule({
  declarations: [
    GameReviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(GameReviewsPage),
  ],
})
export class GameReviewsPageModule {}
