import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilesPerDayPage } from './miles-per-day.page';

const routes: Routes = [
  {
    path: '',
    component: MilesPerDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilesPerDayPageRoutingModule {}
