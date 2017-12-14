import { HospitalComponent } from './dev/hospital/hospital.component';

import { BtnComponent } from './dev/btn/btn.component';
import { SignUpComponent } from './dev/user/sign-up/sign-up.component';
import { SignInComponent } from './dev/user/sign-in/sign-in.component';
import { MembershipComponent } from './dev/user/membership/membership.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import { MedicalInfoComponent } from './dev/medical-info/components/medical-info.component';
import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetStateComponent } from './dev/pet-state/pet-state.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'membership', component: MembershipComponent },
  { path: '', component: PetComponent },
  { path: 'register', component: PetRegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'btn', component: BtnComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'petstate', component: PetStateComponent },
  { path: 'hospital', component: HospitalComponent},
  { path: 'medical', component: MedicalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}