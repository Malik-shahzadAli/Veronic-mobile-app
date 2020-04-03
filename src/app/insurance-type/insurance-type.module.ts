import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceTypePageRoutingModule } from './insurance-type-routing.module';

import { InsuranceTypePage } from './insurance-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuranceTypePageRoutingModule
  ],
  declarations: [InsuranceTypePage]
})
export class InsuranceTypePageModule {}
