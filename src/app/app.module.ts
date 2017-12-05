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
    MembershipComponent,
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
