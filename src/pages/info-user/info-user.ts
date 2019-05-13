import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfos} from '../../models/userInfos.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public fromBuilder: FormBuilder) {
  this.userData = this.fromBuilder.group({
    pseudo: ['', Validators.compose([Validators.required])],
    age: ['', Validators.compose([Validators.required])],
    gender: ['', Validators.compose([Validators.required])],
    weigth: ['', Validators.compose([Validators.required])],
    size: ['', Validators.compose([Validators.required])]
  });
  console.log(this.userData);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoUserPage');
  }

  onSubmit(f){
console.log(f.value);

  }
}
