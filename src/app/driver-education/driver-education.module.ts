import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverEducationPageRoutingModule } from './driver-education-routing.module';

import { DriverEducationPage } from './driver-education.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DriverEducationPageRoutingModule
  ],
  declarations: [DriverEducationPage]
})
export class DriverEducationPageModule {}
