
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '../profile.service';
import { List } from 'ionic-angular';

export class Feed {
    constructor(private router: Router, private profileService: ProfileService) {
    }
    public ThumbNail:string;
    public Description:string;
    public Id:number;
    public Action:number;
    public UserID:number;
}
