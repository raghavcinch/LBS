import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { FeedPage } from '../feed/feed';


@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  feedPage = FeedPage;
  buyLend = AboutPage;
  myProfilePage = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService : LoginService) {
    var isLoggedIn = loginService.isLoggedIn();
    
     if(!isLoggedIn)
       this.navCtrl.push(LoginPage);
  }
}
