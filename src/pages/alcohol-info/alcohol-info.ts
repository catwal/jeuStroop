import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlcoholInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alcohol-info',
  templateUrl: 'alcohol-info.html',
})
export class AlcoholInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 var user = this.navParams.get('user')
 console.log(user);
 var userLocal = localStorage.getItem('FIRST_CONNEXION');
 console.log(userLocal);
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlcoholInfoPage');
  }

}
