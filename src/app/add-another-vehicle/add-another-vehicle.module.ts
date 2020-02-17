import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnotherVehiclePageRoutingModule } from './add-another-vehicle-routing.module';

import { AddAnotherVehiclePage } from './add-another-vehicle.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddAnotherVehiclePageRoutingModule
  ],
  declarations: [AddAnotherVehiclePage]
})
export class AddAnotherVehiclePageModule {}
