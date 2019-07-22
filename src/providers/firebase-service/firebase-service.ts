import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

   addUser(value) {
     return new Promise<any>((resolve, reject) => {

    /*  this.afs.collection('/users').add({
        value
      })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )*/
    })
  } 
}


