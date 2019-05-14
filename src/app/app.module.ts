import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommonModule } from '@angular/common';
import { ModalPage } from '../pages/modal/modal';
import { InfoUserPage } from '../pages/info-user/info-user';
import { MomentoPage } from '../pages/momento/momento';
import { ReactionTimePage } from '../pages/reaction-time/reaction-time';
import { AlcoholInfoPage } from '../pages/alcohol-info/alcohol-info';
import { FormsModule } from '@angular/forms';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage,
    InfoUserPage,
    MomentoPage,
    ReactionTimePage,
    AlcoholInfoPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage,
    InfoUserPage,
    MomentoPage,
    ReactionTimePage,
    AlcoholInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
