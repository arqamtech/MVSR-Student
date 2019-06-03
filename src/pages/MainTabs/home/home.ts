import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductDisplayPage } from '../../HomePages/product-display/product-display';
import { LoginSplashPage } from '../../Auths/login-splash/login-splash';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuItems: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public navParams: NavParams,
  ) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.navCtrl.setRoot(LoginSplashPage);
      }
    })
    this.getMenu();
  }

  getMenu() {
    this.db.list(`MenuItems`).snapshotChanges().subscribe(snap => {
      this.menuItems = [];
      snap.forEach(iisp => {


        let temp: any = iisp.payload.val();
        temp.key = iisp.key;
        this.menuItems.push(temp)

      })
    })
  }
  view(i) {
    this.navCtrl.push(ProductDisplayPage, { item: i })
  }
}
