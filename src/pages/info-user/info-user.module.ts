import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { InfoUserPage } from './info-user';

@NgModule({
  declarations: [
    InfoUserPage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(InfoUserPage),
  ],
})
export class InfoUserPageModule {}
