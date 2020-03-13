import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimaryNamePage } from './primary-name.page';

const routes: Routes = [
  {
    path: '',
    component: PrimaryNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimaryNamePageRoutingModule {}
