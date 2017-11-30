import { HospitalComponent } from './dev/hospital/hospital.component';
import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetComponent },
  { path: 'register', component: PetRegisterComponent },
  { path: 'hospital', component: HospitalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }