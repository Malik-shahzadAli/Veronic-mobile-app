import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    DriverEducationPageRoutingModule
  ],
  declarations: [DriverEducationPage]
})
export class DriverEducationPageModule {}
