import { HospitalComponent } from './dev/hospital/hospital.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { UserComponent } from './dev/user/user.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import { SidebarComponent } from './dev/dashboard/sidebar.component';

import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { BtnComponent } from './dev/btn/btn.component';

import { SignUpComponent } from './dev/user/sign-up/sign-up.component';
import { SignInComponent } from './dev/user/sign-in/sign-in.component';
import { MembershipComponent } from './dev/user/membership/membership.component';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    UserComponent,
    DashboardComponent,
    PetComponent,
    PetRegisterComponent,
    SidebarComponent,
    BtnComponent,
    SignUpComponent,
    SignInComponent,
    MembershipComponent,
    SidebarComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRWdV7hVNkFodjr_PouORs8pjwkCcOF0Y'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
