import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Feed } from "./models/feed.model";

@Injectable()  //Allows injection of Http Service into the postservice.
            //Without this attribute, we get error, Can't resolve all parameters for PostService
export class FeedService{
    constructor(private httpObj:Http){

    }
    loadFeed = () => {
       var feeds:Array<Feed> = [
           <Feed>{
                Description : "Vinay is looking out for a cricket bat over the weekend",
                Id:100,
                Action:1,
                ThumbNail:"https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/27331859_1724392420947055_8178552753102694551_n.jpg?_nc_cat=0&oh=1518d87e1c044d785482e66e531619d7&oe=5BD95081"
           },
           <Feed>{
            Description : "Vinay is looking out for a cricket bat over the weekend",
            Id:100,
            Action:1,
            ThumbNail:"https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/27331859_1724392420947055_8178552753102694551_n.jpg?_nc_cat=0&oh=1518d87e1c044d785482e66e531619d7&oe=5BD95081"
            },
            <Feed>{
                Description : "Vinay is looking out for a cricket bat over the weekend",
                Id:100,
                Action:2,
                ThumbNail:"https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/27331859_1724392420947055_8178552753102694551_n.jpg?_nc_cat=0&oh=1518d87e1c044d785482e66e531619d7&oe=5BD95081"
           },
           <Feed>{
            Description : "Vinay is looking out for a cricket bat over the weekend",
            Id:100,
            Action:2,
            ThumbNail:"https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/27331859_1724392420947055_8178552753102694551_n.jpg?_nc_cat=0&oh=1518d87e1c044d785482e66e531619d7&oe=5BD95081"
       },
       ]
       return feeds;
    }
}