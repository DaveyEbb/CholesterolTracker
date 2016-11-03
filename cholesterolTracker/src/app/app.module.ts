import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Import pages
import { HomePage } from '../pages/home/home';
import { ChartsPage } from '../pages/charts/charts';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { BloodtestListPage } from '../pages/bloodtest-list/bloodtest-list';
import { BloodtestCreatePage } from '../pages/bloodtest-create/bloodtest-create';
import { BloodtestDetailPage } from '../pages/bloodtest-detail/bloodtest-detail';


// Import providers
import { BloodtestData } from '../providers/bloodtest-data';
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    ChartsPage,
    BloodtestCreatePage,
    BloodtestListPage,
    BloodtestDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    ChartsPage,
    BloodtestCreatePage,
    BloodtestListPage,
    BloodtestDetailPage
  ],
  providers: [
    AuthData,
    EventData,
    ProfileData,
    BloodtestData
  ]
})
export class AppModule {}
