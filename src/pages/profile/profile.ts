import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../services/models/profile.model';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 public profile:Profile;
 public shareMode:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService:ProfileService) {
    this.profile = profileService.loadProfileInfo();
    //Defaults
    this.shareMode = "Goods"; //Default Sharemode
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
