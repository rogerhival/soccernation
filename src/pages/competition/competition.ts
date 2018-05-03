import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Competition } from '../../providers';

@IonicPage()
@Component({
    selector: 'competition',
    templateUrl: 'competition.html'
})
export class CompetitionPage {
    // account: { email: string, password: string } = {
    //     email: 'rogerhival@gmail.com',
    //     password: 'tonin@123'
    //   };
    competitions: any;

    constructor(public navCtrl: NavController,
      public competition: Competition,
      public toastCtrl: ToastController) {
        this.getCompetitions();
    }

    getCompetitions() {
      this.competition.getCompetitions().subscribe((resp) => {
        console.log(resp);
        this.competitions = resp;
      }, (err) => {
        this.navCtrl.push(CompetitionPage);
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