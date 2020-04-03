import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherOtpPage } from './other-otp.page';

const routes: Routes = [
  {
    path: '',
    component: OtherOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherOtpPageRoutingModule {}
