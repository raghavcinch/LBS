import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';

@Injectable()  //Allows injection of Http Service into the postservice.
            //Without this attribute, we get error, Can't resolve all parameters for PostService
export class LoginService{
    constructor(private httpObj:Http){

    }
    isLoggedIn = () => {
        var authToken = localStorage.getItem('authToken');
        if(authToken)
            return true;
        else
             return false;
    }
    setAuthToken = (username) => {
        if(username)
            localStorage.setItem('authToken', username);
    }
    clearAuthToken = () => {
        localStorage.setItem('authToken', null);
    }
}