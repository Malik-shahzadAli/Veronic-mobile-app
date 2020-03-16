import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwaScanPage } from './pwa-scan.page';

const routes: Routes = [
  {
    path: '',
    component: PwaScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwaScanPageRoutingModule {}
