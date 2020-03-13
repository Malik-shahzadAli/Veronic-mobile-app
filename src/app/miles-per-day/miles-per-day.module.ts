import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilesPerDayPageRoutingModule } from './miles-per-day-routing.module';

import { MilesPerDayPage } from './miles-per-day.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    MilesPerDayPageRoutingModule
  ],
  declarations: [MilesPerDayPage]
})
export class MilesPerDayPageModule {}
