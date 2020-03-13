import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import { NgxMaskModule } from 'ngx-mask';

import { ContactInfoPageRoutingModule } from './contact-info-routing.module';

import { ContactInfoPage } from './contact-info.page';
import { TranslateModule} from '@ngx-translate/core';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { BrMaskerModule } from 'br-mask';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    BrMaskerModule,

    ContactInfoPageRoutingModule
  ],
  declarations: [ContactInfoPage]
})
export class ContactInfoPageModule {}
