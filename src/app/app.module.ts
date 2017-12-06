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
import { BtnComponent } from './dev/btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    UserComponent,
    DashboardComponent,
    PetComponent,
    PetRegisterComponent,
<<<<<<< HEAD
    SidebarComponent
=======
    SidebarComponent,
<<<<<<< HEAD
    BtnComponent,
=======
    HospitalComponent,
>>>>>>> 5f91ff52f1c54dba257aec997fc0f39f25928299
>>>>>>> 6669a8d52f8a8a193111f707a1757b589c691cab
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
