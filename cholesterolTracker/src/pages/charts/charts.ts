import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as ChartJs from 'chart.js'; // 导入chart.js
@Component({
    selector: 'page-charts',
    templateUrl: 'charts.html'
})
export class ChartsPage {
    constructor(private navController:NavController) {

    }




    ionViewDidEnter() {
        var date1 = new Date(2014, 2, 21);
        var date2 = new Date(2016, 2, 1);
        var date3 = new Date(2016, 5, 13);
        console.log(date1);
        var canvas = <HTMLCanvasElement> document.getElementById("myChart");
        var ctx = canvas.getContext("2d");  // 这里是关键, 不能写在constructor()中
        ChartJs.Line(ctx,{
            data: {
                labels: [date1, date2, date3],
                datasets: [
                    {
                    label: "HDL",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1.8, 1.63, 1.59],
            spanGaps: false,
                },
                {
                    label: "LDL",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [6.2, 5,2, 5],
            spanGaps: false,
                }  
             ]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: "time",
                        display: "true",
                        scaleLabel: {
                            labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    }
}


//  ionViewDidEnter() {
//         var canvas = <HTMLCanvasElement> document.getElementById("myChart");
//         var ctx = canvas.getContext("2d");  // 这里是关键, 不能写在constructor()中
//         ChartJs.Line(ctx,{
//             data: {
//                 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//                 datasets: [{
//                     label: '# of Votes',
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255,99,132,1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero:true
//                         }
//                     }]
//                 }
//             }
//         })
//     }
// }


