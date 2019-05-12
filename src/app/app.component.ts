import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InfoUserPage } from '../pages/info-user/info-user';
import { AlcoholInfoPage } from '../pages/alcohol-info/alcohol-info';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    /* appeler ici le localstorage pour la première connexion
      si vide: page
      si non vide combien d'alcool */
      var infoUser = localStorage.getItem('FIRST_CONNEXION');
      console.log(infoUser);
        if(localStorage.getItem('FIRST_CONNEXION') === null ){
          this.rootPage = InfoUserPage;
        }else{
          this.rootPage = AlcoholInfoPage;
        }
  }
}

