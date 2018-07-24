import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from '../../services/models/feed.model';
import { FeedService } from '../../services/feed.service';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public feeds:Array<Feed>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public feedService:FeedService) {
    this.feeds = feedService.loadFeed();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
  filterByAction = (feed, value) => {
    return feed.Action == value;
  }

}
