import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceModePage } from './finance-mode.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceModePageRoutingModule {}
