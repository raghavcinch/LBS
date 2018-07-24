import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {LoginPage} from '../pages/login/login'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginService } from '../services/login.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Route, Routes,RouterOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router'
import { AuthGuard } from '../services/authGuard';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileService } from '../services/profile.service';
import { FeedPage } from '../pages/feed/feed';
import { FeedService } from '../services/feed.service';
import { IndexFilter } from '../services/pipe';

const appRoutes: Routes = [
  { path: 'login', component:LoginPage },

  // home route protected by auth guard  ??
  { path: '', component: TabsPage },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ProfilePage,
    FeedPage,
    IndexFilter
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
    //RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ProfilePage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    ProfileService,
    FeedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
