import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherContectInfoPage } from './other-contect-info.page';

const routes: Routes = [
  {
    path: '',
    component: OtherContectInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherContectInfoPageRoutingModule {}
