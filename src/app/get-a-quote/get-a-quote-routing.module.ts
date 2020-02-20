import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetAQuotePage } from './get-a-quote.page';

const routes: Routes = [
  {
    path: '',
    component: GetAQuotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetAQuotePageRoutingModule {}
