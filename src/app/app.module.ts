import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserprofileComponent } from './views/userprofile/userprofile.component';
import { WindowService } from './service/window.service';
import { AF } from './providers/af';

export const firebaseConfig = {
  apiKey: "AIzaSyCRCdZGuk2QuQ2nArHASO3_BKvVzYvl60w",
    authDomain: "restro-e78da.firebaseapp.com",
    databaseURL: "https://restro-e78da.firebaseio.com",
    projectId: "restro-e78da",
    storageBucket: "restro-e78da.appspot.com",
    messagingSenderId: "979815721457"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutes
  ],
  providers: [AngularFireAuth, AngularFireDatabase, WindowService,AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
