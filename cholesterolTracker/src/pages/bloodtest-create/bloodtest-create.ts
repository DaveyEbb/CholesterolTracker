import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BloodtestData } from '../../providers/bloodtest-data';

@Component({
  selector: 'page-bloodtest-create',
  templateUrl: 'bloodtest-create.html'
})
export class BloodtestCreatePage {

  constructor(public nav: NavController, public bloodtestData: BloodtestData ) {
    this.nav = nav;
    this.bloodtestData = bloodtestData;
  }

  ionViewDidLoad() {
    console.log('Hello BloodtestCreate Page');
  }

  createBloodtest(bloodtestDesc: string, hdl: number, ldl: number, 
              trigl: number, totchol: number, testDate: string) {
    this.bloodtestData.createBloodtest(bloodtestDesc, hdl, ldl, trigl, 
                                        totchol, testDate).then( () =>
    {
      this.nav.pop();
    });
  }

}
