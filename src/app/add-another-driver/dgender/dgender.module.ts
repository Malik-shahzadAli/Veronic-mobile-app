import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DgenderPageRoutingModule } from './dgender-routing.module';

import { DgenderPage } from './dgender.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    DgenderPageRoutingModule
  ],
  declarations: [DgenderPage]
})
export class DgenderPageModule {}
