import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BloodtestData } from '../../providers/bloodtest-data';

@Component({
  selector: 'page-bloodtest-detail',
  templateUrl: 'bloodtest-detail.html',
})

export class BloodtestDetailPage {
  currentBloodtest: any;
  constructor(public nav: NavController, public navParams: NavParams, 
      public bloodtestData: BloodtestData) {
    this.navParams = navParams;

    this.bloodtestData.getBloodtestDetail(this.navParams.get('bloodtestId'))
      .on('value', (snapshot) => {
        this.currentBloodtest = snapshot.val();
    });
  }
}
