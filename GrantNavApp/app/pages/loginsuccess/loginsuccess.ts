import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the LoginsuccessPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/loginsuccess/loginsuccess.html',
})
export class LoginsuccessPage {

  buttonText

  constructor(private nav: NavController, private navParams: NavParams, private vc: ViewController) {
    this.buttonText = this.navParams.get('myString');
  }

  popThis () {
    let data = {
      dataOne: "Dave"
    }
    this.vc.dismiss(data);
  }

}
