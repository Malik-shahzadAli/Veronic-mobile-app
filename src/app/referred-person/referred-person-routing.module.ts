import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferredPersonPage } from './referred-person.page';

const routes: Routes = [
  {
    path: '',
    component: ReferredPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferredPersonPageRoutingModule {}
