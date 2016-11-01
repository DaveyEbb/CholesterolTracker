import {Component} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  static get parameters () {
    return [[NavController]];
  }
  
  constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  buttonClick () {
    this.navCtrl.push(ContactPage);
  }
}
