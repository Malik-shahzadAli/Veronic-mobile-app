import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpTypePage } from './otp-type.page';

const routes: Routes = [
  {
    path: '',
    component: OtpTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpTypePageRoutingModule {}
