import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherOtpTypePageRoutingModule } from './other-otp-type-routing.module';

import { OtherOtpTypePage } from './other-otp-type.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    OtherOtpTypePageRoutingModule
  ],
  declarations: [OtherOtpTypePage]
})
export class OtherOtpTypePageModule {}
