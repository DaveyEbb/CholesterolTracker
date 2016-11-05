import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import { AuthData } from '../../providers/auth-data';
//import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { ChartsPage } from '../charts/charts'
import { BloodtestCreatePage } from '../bloodtest-create/bloodtest-create'
import { BloodtestListPage } from '../bloodtest-list/bloodtest-list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }
  
  
  // logMeOut() {
  //   this.authData.logoutUser().then( () => {
  //     this.navCtrl.setRoot(LoginPage);
  //   });
  // }

  showCharts() {
      this.navCtrl.push(ChartsPage);
  }

  goToCreate() {
    this.navCtrl.push(BloodtestCreatePage);
  }

  goToList() {
    this.navCtrl.push(BloodtestListPage);  
  }
  
}

