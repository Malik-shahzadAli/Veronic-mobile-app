import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverSplashPageRoutingModule } from './driver-splash-routing.module';

import { DriverSplashPage } from './driver-splash.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DriverSplashPageRoutingModule
  ],
  declarations: [DriverSplashPage]
})
export class DriverSplashPageModule {}
