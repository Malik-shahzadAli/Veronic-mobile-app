import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferringPage } from './referring.page';

const routes: Routes = [
  {
    path: '',
    component: ReferringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferringPageRoutingModule {}
