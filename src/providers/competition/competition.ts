/* This is needed for every rxjs operator you want to use. */
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
/* http://reactivex.io/rxjs/ */

import { Injectable } from "@angular/core";
import { Api } from '../api/api';

@Injectable()
export class Competition {
    _competition: any;

    constructor(public api: Api){}

    getCompetitions() {
        return this.api.get('competitions')
            .share();
    }
}