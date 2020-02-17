import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOwnerPage } from './home-owner.page';

const routes: Routes = [
  {
    path: '',
    component: HomeOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeOwnerPageRoutingModule {}
