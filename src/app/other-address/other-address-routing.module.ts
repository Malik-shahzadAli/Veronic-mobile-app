import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherAddressPage } from './other-address.page';

const routes: Routes = [
  {
    path: '',
    component: OtherAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherAddressPageRoutingModule {}
