import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnotherVehiclePage } from './add-another-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnotherVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnotherVehiclePageRoutingModule {}
