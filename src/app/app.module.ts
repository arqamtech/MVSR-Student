import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HomePage } from '../pages/MainTabs/home/home';
import { TabsPage } from '../pages/Supp/tabs/tabs';
import { ExplorePage } from '../pages/MainTabs/explore/explore';
import { NavigatePage } from '../pages/MainTabs/navigate/navigate';
import { ProfilePage } from '../pages/MainTabs/profile/profile';
import { LoginPage } from '../pages/Auths/login/login';
import { LoginSplashPage } from '../pages/Auths/login-splash/login-splash';
import { SignUpPage } from '../pages/Auths/sign-up/sign-up';
import { LoaderPage } from '../pages/Supp/loader/loader';
import { ContactUsPage } from '../pages/ProfilePages/contact-us/contact-us';
import { FaqSPage } from '../pages/ProfilePages/faq-s/faq-s';
import { CartPage } from '../pages/MainTabs/cart/cart';
import { YourOrdersPage } from '../pages/ProfilePages/your-orders/your-orders';
import { CategoryWiseProductsPage } from '../pages/HomePages/category-wise-products/category-wise-products';
import { ProductDisplayPage } from '../pages/HomePages/product-display/product-display';
import { PaymentGatewayPage } from '../pages/PaymentPages/payment-gateway/payment-gateway';
import { PaymentConfirmPage } from '../pages/PaymentPages/payment-confirm/payment-confirm';
import { SellerProfilePage } from '../pages/HomePages/seller-profile/seller-profile';


export const firebaseCred = {
  apiKey: "AIzaSyDFyu6CMwvb7ScajfV4ourVVcQWnZCz7iQ",
  authDomain: "mvsr-food.firebaseapp.com",
  databaseURL: "https://mvsr-food.firebaseio.com",
  projectId: "mvsr-food",
  storageBucket: "mvsr-food.appspot.com",
  messagingSenderId: "703840969214"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ExplorePage,
    NavigatePage,
    ProfilePage,
    LoginPage,
    LoginSplashPage,
    SignUpPage,
    LoaderPage,
    YourOrdersPage,
    ContactUsPage,
    FaqSPage,
    CartPage,
    CategoryWiseProductsPage,
    ProductDisplayPage,
    PaymentGatewayPage,
    PaymentConfirmPage,
    SellerProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ExplorePage,
    NavigatePage,
    ProfilePage,
    LoginPage,
    LoginSplashPage,
    SignUpPage,
    LoaderPage,
    YourOrdersPage,
    ContactUsPage,
    FaqSPage,
    CartPage,
    CategoryWiseProductsPage,
    ProductDisplayPage,
    PaymentGatewayPage,
    SellerProfilePage,
    PaymentConfirmPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
