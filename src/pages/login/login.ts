import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';

@IonicPage()
@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginPage {
    account: { email: string, password: string } = {
        email: 'rogerhival@gmail.com',
        password: 'tonin@123'
      };

    constructor(public navCtrl: NavController,
      public user: User,
      public toastCtrl: ToastController) {
    }

    doLogin() {
      this.user.login(this.account).subscribe((resp) => {
        this.navCtrl.push(LoginPage);
      }, (err) => {
        this.navCtrl.push(LoginPage);
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