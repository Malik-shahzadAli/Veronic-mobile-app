import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceTypePage } from './insurance-type.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceTypePageRoutingModule {}
