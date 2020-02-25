import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstSplashPage } from './first-splash.page';

const routes: Routes = [
  {
    path: '',
    component: FirstSplashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstSplashPageRoutingModule {}
