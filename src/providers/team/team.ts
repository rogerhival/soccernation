/* This is needed for every rxjs operator you want to use. */
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
/* http://reactivex.io/rxjs/ */

import { Injectable } from "@angular/core";
import { Api } from '../api/api';
import { Competition } from '../../providers';

@Injectable()
export class Team {
    //_team: any;
    _competition: any;

    constructor(public api: Api){
        this._competition = new Competition(api);
    }

    getTeams() {
        return this.api.get('teams').share();
    }

    getCompetitions() {
        return this._competition.getCompetitions();
    }
}