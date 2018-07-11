import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenrePopulatedPage } from './genre-populated';

@NgModule({
  declarations: [
    GenrePopulatedPage,
  ],
  imports: [
    IonicPageModule.forChild(GenrePopulatedPage),
  ],
})
export class GenrePopulatedPageModule {}
