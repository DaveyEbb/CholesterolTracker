import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the DonutChart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donut-chart',
  templateUrl: 'donut-chart.html'
})
export class DonutChart {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DonutChart Page');
  }

}


//import {DonutPage} from 'ionic-angular';

// @Component({
//   templateUrl: 'build/pages/pie-chart/pie-chart.html'
// })

// export class ChartsPage {
//   constructor() {		
//   }
// }