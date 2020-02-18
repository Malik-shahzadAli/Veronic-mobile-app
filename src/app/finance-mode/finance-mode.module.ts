import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceModePageRoutingModule } from './finance-mode-routing.module';

import { FinanceModePage } from './finance-mode.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    FinanceModePageRoutingModule
  ],
  declarations: [FinanceModePage]
})
export class FinanceModePageModule {}
