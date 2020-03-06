import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferringPageRoutingModule } from './referring-routing.module';

import { ReferringPage } from './referring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReferringPageRoutingModule
  ],
  declarations: [ReferringPage]
})
export class ReferringPageModule {}
