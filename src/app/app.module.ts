import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
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
import { HospitalComponent } from './dev/hospital/hospital.component';
import { MedicalInfoComponent } from './dev/medical-info/medical-info.component';


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
    MedicalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRWdV7hVNkFodjr_PouORs8pjwkCcOF0Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
