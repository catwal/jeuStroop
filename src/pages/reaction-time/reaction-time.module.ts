import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactionTimePage } from './reaction-time';

@NgModule({
  declarations: [
    ReactionTimePage,
  ],
  imports: [
    IonicPageModule.forChild(ReactionTimePage),
  ],
})
export class ReactionTimePageModule {}
