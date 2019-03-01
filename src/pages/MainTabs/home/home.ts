import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryWiseProductsPage } from '../../HomePages/category-wise-products/category-wise-products';
import moment from 'moment';
import { ProductDisplayPage } from '../../HomePages/product-display/product-display';

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
    this.getMenu();
  }

  getMenu() {
    this.db.list(`Menus/${moment().format("DDMMYY")}/Items`).snapshotChanges().subscribe(snap => {
      this.menuItems = [];
      snap.forEach(snp => {

        this.db.object(`Items/${snp.payload.val()}/`).snapshotChanges().subscribe(iisp => {

          let temp: any = iisp.payload.val();
          temp.key = iisp.key;
          this.menuItems.push(temp)

        })
      })
    })
  }
  view(i) {
    this.navCtrl.push(ProductDisplayPage, { item: i })
  }
}
