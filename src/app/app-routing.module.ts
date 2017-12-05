<<<<<<< HEAD
import { BtnComponent } from './dev/btn/btn.component';
=======
import { HospitalComponent } from './dev/hospital/hospital.component';
>>>>>>> 5f91ff52f1c54dba257aec997fc0f39f25928299
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import {
  PetComponent,
  PetRegisterComponent
} from './dev/pet/components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetComponent },
  { path: 'register', component: PetRegisterComponent },
<<<<<<< HEAD
  { path: 'dashboard', component: DashboardComponent },
  { path: 'btn', component: BtnComponent }
=======
  { path: 'hospital', component: HospitalComponent },
  { path: 'dashboard', component: DashboardComponent }
>>>>>>> 5f91ff52f1c54dba257aec997fc0f39f25928299
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}