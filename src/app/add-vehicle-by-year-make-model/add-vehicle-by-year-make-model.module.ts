import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehicleByYearMakeModelPageRoutingModule } from './add-vehicle-by-year-make-model-routing.module';

import { AddVehicleByYearMakeModelPage } from './add-vehicle-by-year-make-model.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    AddVehicleByYearMakeModelPageRoutingModule
  ],
  declarations: [AddVehicleByYearMakeModelPage]
})
export class AddVehicleByYearMakeModelPageModule {}
