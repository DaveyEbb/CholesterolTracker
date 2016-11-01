import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import 'chart.js/src/chart.js';

import {ChartComponent, Chart} from 'ng2-chartjs2/components/chart.component';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
