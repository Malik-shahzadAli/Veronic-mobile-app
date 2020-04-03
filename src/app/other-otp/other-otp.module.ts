import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherOtpPageRoutingModule } from './other-otp-routing.module';

import { OtherOtpPage } from './other-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OtherOtpPageRoutingModule
  ],
  declarations: [OtherOtpPage]
})
export class OtherOtpPageModule {}
