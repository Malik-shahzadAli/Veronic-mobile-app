import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleSplashPageRoutingModule } from './vehicle-splash-routing.module';

import { VehicleSplashPage } from './vehicle-splash.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    VehicleSplashPageRoutingModule
  ],
  declarations: [VehicleSplashPage]
})
export class VehicleSplashPageModule {}
