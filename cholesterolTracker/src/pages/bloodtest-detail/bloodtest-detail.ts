import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { BloodtestDetailPage } from '../bloodtest-detail/bloodtest-detail';
import { BloodtestData } from '../../providers/bloodtest-data';

@Component({
  selector: 'page-bloodtest-detail',
  templateUrl: 'bloodtest-detail.html'
})
export class BloodtestDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BloodtestDetail Page');
  }

}
