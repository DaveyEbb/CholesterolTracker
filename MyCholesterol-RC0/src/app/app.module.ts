import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChartjsPage } from '../pages/chartjs/chartjs';
import { EchartsPage } from '../pages/echarts/echarts';
import { HighchartsPage } from '../pages/highcharts/highcharts';
import { C3Page } from '../pages/c-3/c-3';
//import { ChartComponent, Chart } from 'ng2-chartjs2';
import { NavController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChartjsPage,
    EchartsPage,
    HighchartsPage,
    C3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChartjsPage,
    EchartsPage,
    HighchartsPage,
    C3Page
  ],
  providers: []
})
export class AppModule {}
