import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Team, Competition } from '../../providers';

@IonicPage()
@Component({
    selector: 'team',
    templateUrl: 'team.html'
})
export class TeamPage {
    teams: any;
    competitions: any;

    constructor(public navCtrl: NavController,
      public team: Team,
      public toastCtrl: ToastController) {
        this._getTeams();
        this._getCompetitions();
    }

    _getTeams() {
      this.team.getTeams().subscribe((resp) => {
        console.log(resp);
        this.teams = resp;
      }, (err) => {
        this.navCtrl.push(TeamPage);
        //error
        let toast = this.toastCtrl.create({
          message: "error login",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    }

    _getCompetitions() {
      this.team.getCompetitions().subscribe((resp) => {
        console.log(resp);
        this.competitions = resp;
      }, (err) => {
        this.navCtrl.push(TeamPage);
        //error
        let toast = this.toastCtrl.create({
          message: "error login",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    }
}