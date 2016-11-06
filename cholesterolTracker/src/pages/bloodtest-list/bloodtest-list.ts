import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BloodtestDetailPage } from '../bloodtest-detail/bloodtest-detail';
import { BloodtestData } from '../../providers/bloodtest-data';

@Component({
  selector: 'page-bloodtest-list',
  templateUrl: 'bloodtest-list.html',
})
export class BloodtestListPage {
  public bloodtestList: any;

  constructor(public nav: NavController, public bloodtestData: BloodtestData) {
    this.nav = nav;
    this.bloodtestData = bloodtestData;

    this.bloodtestData.getBloodtestList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          bloodtestDesc: snap.val().bloodtestDesc,
          testDate: snap.val().testDate,
        });
      });
      this.bloodtestList = rawList;
    });
  }

  goToBloodtestDetail(bloodtestId){
    this.nav.push(BloodtestDetailPage, {
      bloodtestId: bloodtestId,
    });
  }
}
