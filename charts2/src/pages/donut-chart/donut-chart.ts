import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Chart } from './node_modules/fusioncharts/fusioncharts.js';
import { Chart } from 'ng2-chartjs';
//import * as ChartJs from 'Chart.js';


@Component({
  selector: 'page-donut-chart',
  templateUrl: 'donut-chart.html',
})
export class DonutChartPage {

  constructor(private navController:NavController) {}

  labels: string[] = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  data: Chart.Dataset[] = [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ];
}

