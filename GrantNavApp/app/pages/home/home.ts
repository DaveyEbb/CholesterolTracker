import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {LoginsuccessPage} from '../loginsuccess/loginsuccess';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

receivedData

  constructor(private navCtrl: NavController) {

  }
 
  login () {

    let modalPage = Modal.create(LoginsuccessPage);

    modalPage.onDismiss(data => {
      this.receivedData = data.dataOne;
    });

    this.navCtrl.present(modalPage);

    }
  }

