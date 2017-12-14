import { HospitalComponent } from './dev/hospital/hospital.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { UserComponent } from './dev/user/user.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import {
  PetProfileComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { BtnComponent } from './dev/btn/btn.component';

import { SignUpComponent } from './dev/user/sign-up/sign-up.component';
import { SignInComponent } from './dev/user/sign-in/sign-in.component';
import { MembershipComponent } from './dev/user/membership/membership.component';
import { MedicalInfoComponent } from './dev/medical-info/components/medical-info.component';
import { SidebarComponent } from './dev/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    UserComponent,
    DashboardComponent,
    PetProfileComponent,
    PetRegisterComponent,
    SidebarComponent,
    BtnComponent,
    SignUpComponent,
    SignInComponent,
    MembershipComponent,
    SidebarComponent,
    HospitalComponent,
    MedicalInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRWdV7hVNkFodjr_PouORs8pjwkCcOF0Y'
    }),
    HttpClientModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
