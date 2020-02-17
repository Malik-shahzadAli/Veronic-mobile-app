import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehicleByVinPageRoutingModule } from './add-vehicle-by-vin-routing.module';

import { AddVehicleByVinPage } from './add-vehicle-by-vin.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddVehicleByVinPageRoutingModule
  ],
  declarations: [AddVehicleByVinPage]
})
export class AddVehicleByVinPageModule {}
