import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { UserComponent } from './dev/user/user.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import { SidebarComponent } from './dev/dashboard/sidebar.component';
import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
<<<<<<< HEAD
import { HospitalComponent } from './dev/hospital/hospital.component';
import { SignUpComponent } from './dev/user/sign-up/sign-up.component';
=======
>>>>>>> 01c3019c918e23e5a9bd6cab70da13a7128a4d5b


@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    UserComponent,
    DashboardComponent,
    PetComponent,
    PetRegisterComponent,
    HospitalComponent,
    SidebarComponent,
    SignUpComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
