import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherPrimaryNamePage } from './other-primary-name.page';

const routes: Routes = [
  {
    path: '',
    component: OtherPrimaryNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherPrimaryNamePageRoutingModule {}
