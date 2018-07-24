import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../services/login.service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginInfo = {
    hasValidOtp : false,
    email : "test",
    otp:null
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService : LoginService) {
    
  }

  generateOtp = () => {
      //call otp generation api 
      //this.hasValidOtp = true;
      this.loginInfo.otp = "5478";    //Sample data
      this.loginInfo.hasValidOtp = true;
  }
  signIn = () => {
    debugger;
    this.loginService.setAuthToken(this.loginInfo.email);
    debugger;
    this.navCtrl.push(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
