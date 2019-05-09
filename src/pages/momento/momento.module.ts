import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentoPage } from './momento';

@NgModule({
  declarations: [
    MomentoPage,
  ],
  imports: [
    IonicPageModule.forChild(MomentoPage),
  ],
})
export class MomentoPageModule {}
