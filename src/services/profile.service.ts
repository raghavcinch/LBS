import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Category, SubCategory, Profile } from "./models/profile.model";

@Injectable()  //Allows injection of Http Service into the postservice.
            //Without this attribute, we get error, Can't resolve all parameters for PostService
export class ProfileService{
    constructor(private httpObj:Http){

    }
    username:string;
    
    loadProfileInfo = () => {
        var profile = <Profile>{
            Name:"Raghav",
            Credits:1000,
            Email : "ras1@microsoft.com",
        }
        profile.Preferences= this.getPreferences(profile);
        
        return profile;
    }
    getPreferences = (profile:Profile) => {
        var preferences  = <Array<SubCategory>>[{
            Id:105,
            Name:"Cricket",
            ParentId:5,
            IsSubscribed:false,
        },
        {
            Id:106,
            Name:"Management Books",
            IsSubscribed:false,
        },
        {
            Id:107,
            Name:"Fictional Novels",
            IsSubscribed:false,
        },
        {
            Id:108,
            Name:"Travel",
            IsSubscribed:true,
        },
        {
            Id:109,
            Name:"Doctor Reviews",
            IsSubscribed:true,
        }];
        return preferences.sort((a,b) => {
            return a.IsSubscribed != b.IsSubscribed ? 1 : 0;
        });;
    }
    

    
}