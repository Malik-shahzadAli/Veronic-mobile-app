import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarriageStatusPageRoutingModule } from './marriage-status-routing.module';

import { MarriageStatusPage } from './marriage-status.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MarriageStatusPageRoutingModule
  ],
  declarations: [MarriageStatusPage]
})
export class MarriageStatusPageModule {}
