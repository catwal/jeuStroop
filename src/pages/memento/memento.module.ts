import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MementoPage } from './memento';

@NgModule({
  declarations: [
    MementoPage,
  ],
  imports: [
    IonicPageModule.forChild(MementoPage),
  ],
})
export class MementoPageModule {}
