/* This is needed for every rxjs operator you want to use. */
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
/* http://reactivex.io/rxjs/ */

import { Injectable } from "@angular/core";
import { Api } from '../api/api';

@Injectable()
export class User {
    _user:any;

    constructor(public api: Api){}

    login(accountInfo: any) {
        let login = this.api.post('users/login', accountInfo).share();

        login.subscribe((res: any) => {
            console.log(res);
            if(res.status == 'success') {
                this._loggedIn(res);
            }
        }, err => {
            console.error('Error', err);
        });

        return login;
    }

    signUp(accountInfo: any) {
        let login = this.api.post('user', accountInfo).share();

        login.subscribe((res: any) => {
            if(res.status == 'success'){
                this._loggedIn(res);
            }
        }, err => {
            console.error('Error', err);
        });

        return login;
    }

    logout() {
        this._user = null;
    }

    _loggedIn(res){
        this._user = res.user;
    }
}
