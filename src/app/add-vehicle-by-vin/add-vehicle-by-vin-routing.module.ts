import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehicleByVinPage } from './add-vehicle-by-vin.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehicleByVinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehicleByVinPageRoutingModule {}
