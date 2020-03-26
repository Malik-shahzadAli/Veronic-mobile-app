import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsCustomerEmployeedPage } from './is-customer-employeed.page';

const routes: Routes = [
  {
    path: '',
    component: IsCustomerEmployeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsCustomerEmployeedPageRoutingModule {}
