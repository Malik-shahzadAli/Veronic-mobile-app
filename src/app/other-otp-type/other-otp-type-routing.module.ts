import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherOtpTypePage } from './other-otp-type.page';

const routes: Routes = [
  {
    path: '',
    component: OtherOtpTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherOtpTypePageRoutingModule {}
