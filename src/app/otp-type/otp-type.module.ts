import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpTypePageRoutingModule } from './otp-type-routing.module';

import { OtpTypePage } from './otp-type.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    OtpTypePageRoutingModule
  ],
  declarations: [OtpTypePage]
})
export class OtpTypePageModule {}
