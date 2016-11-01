import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DonutChartPage } from '../pages/donut-chart/donut-chart';
import { ChartModule } from 'ng2-chartjs2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DonutChartPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DonutChartPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
