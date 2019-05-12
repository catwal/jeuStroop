import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlcoholInfoPage } from './alcohol-info';

@NgModule({
  declarations: [
    AlcoholInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlcoholInfoPage),
  ],
})
export class AlcoholInfoPageModule {}
