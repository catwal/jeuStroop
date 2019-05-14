import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfos } from '../../models/userInfos.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlcoholInfoPage } from '../alcohol-info/alcohol-info';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
/**
 * Generated class for the InfoUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-user',
  templateUrl: 'info-user.html',
})
export class InfoUserPage {
  private userData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fromBuilder: FormBuilder, public firebaseService: FirebaseServiceProvider) {
    this.userData = this.fromBuilder.group({
      pseudo: ['', Validators.compose([Validators.required])],
      age: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      weigth: ['', Validators.compose([Validators.required])],
      size: ['', Validators.compose([Validators.required])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoUserPage');
  }

  onSubmit() {
    if (this.userData.valid) {
      var user: Array<UserInfos> = new Array<UserInfos>();
      user = this.userData.value;
      localStorage.setItem('FIRST_CONNEXION', JSON.stringify(user))
      this.firebaseService.addUser(user);
      /* faire la connection a firebase et quand reçu passage à alcohol info */
      this.navCtrl.push(AlcoholInfoPage, { user: user })
    }

  }
}
