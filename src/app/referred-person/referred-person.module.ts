import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { IonicModule } from '@ionic/angular';

import { ReferredPersonPageRoutingModule } from './referred-person-routing.module';

import { ReferredPersonPage } from './referred-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReferredPersonPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [ReferredPersonPage]
})
export class ReferredPersonPageModule {}
