import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehicleByYearMakeModelPage } from './add-vehicle-by-year-make-model.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehicleByYearMakeModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehicleByYearMakeModelPageRoutingModule {}
