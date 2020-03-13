import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleSplashPage } from './vehicle-splash.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleSplashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleSplashPageRoutingModule {}
