import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactInfoPageRoutingModule } from './contact-info-routing.module';

import { ContactInfoPage } from './contact-info.page';
import { TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ContactInfoPageRoutingModule
  ],
  declarations: [ContactInfoPage]
})
export class ContactInfoPageModule {}
