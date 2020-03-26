import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DgenderPage } from './dgender.page';

const routes: Routes = [
  {
    path: '',
    component: DgenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DgenderPageRoutingModule {}
