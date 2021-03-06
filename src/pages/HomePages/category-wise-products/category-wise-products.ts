import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductDisplayPage } from '../product-display/product-display';

@IonicPage()
@Component({
  selector: 'page-category-wise-products',
  templateUrl: 'category-wise-products.html',
})
export class CategoryWiseProductsPage {

  cat = this.navParams.get("cat");

  prodRef = this.db.list(`CategoriesWiseProducts/${this.cat.key}`);
  prods : Array<any>=[];

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getProducts();
    console.log(this.cat);
  }

  getProducts(){
    this.prodRef.snapshotChanges().subscribe(snap=>{
      this.prods = [];
      snap.forEach(snp=>{
        this.db.object(`Products/${snp.key}`).snapshotChanges().subscribe(pSnap=>{
          var temp : any = pSnap.payload.val(); 
          temp.key = pSnap.key;
          this.prods.push(temp);
        })
      })
    })

  }


  displyProd(p){
    this.navCtrl.push(ProductDisplayPage,{prod : p})
  }
}
