import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverEducationPage } from './driver-education.page';

const routes: Routes = [
  {
    path: '',
    component: DriverEducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverEducationPageRoutingModule {}
