import { MembershipComponent } from './dev/user/membership/membership.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'membership', component: MembershipComponent },
  { path: '', component: PetComponent },
  { path: 'register', component: PetRegisterComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }