import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherContectInfoPageRoutingModule } from './other-contect-info-routing.module';

import { OtherContectInfoPage } from './other-contect-info.page';
import { TranslateModule} from '@ngx-translate/core';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    Ng2TelInputModule,
    BrMaskerModule,
    OtherContectInfoPageRoutingModule
  ],
  declarations: [OtherContectInfoPage]
})
export class OtherContectInfoPageModule {}
