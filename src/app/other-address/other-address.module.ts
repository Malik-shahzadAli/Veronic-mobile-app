import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherAddressPageRoutingModule } from './other-address-routing.module';

import { OtherAddressPage } from './other-address.page';
import { TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    OtherAddressPageRoutingModule
  ],
  declarations: [OtherAddressPage]
})
export class OtherAddressPageModule {}
