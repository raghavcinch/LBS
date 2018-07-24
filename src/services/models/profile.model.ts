
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '../profile.service';
import { List } from 'ionic-angular';

export class Profile {
    constructor(private router: Router, private profileService: ProfileService) {
    }
    public Email:string;
    public Name:string;
    public Credits:number;
    public Preferences:Array<SubCategory>;
}

export class Category {
    constructor(private router: Router, private profileService: ProfileService) {
    }
    public Id:number;
    public Name:string;
    
}

export class SubCategory {
    constructor(private router: Router, private profileService: ProfileService) {
    }
    public Id:number;
    public Name:string;
    public CategoryId:number;
    public IsSubscribed:boolean;
    
}