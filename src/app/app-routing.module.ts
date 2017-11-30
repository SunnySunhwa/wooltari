import { HospitalComponent } from './dev/hospital/hospital.component';
import { PetComponent } from './dev/pet/pet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetComponent },
  { path: 'hospital', component: HospitalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }