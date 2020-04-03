import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherPrimaryNamePageRoutingModule } from './other-primary-name-routing.module';

import { OtherPrimaryNamePage } from './other-primary-name.page';
import { TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    OtherPrimaryNamePageRoutingModule
  ],
  declarations: [OtherPrimaryNamePage]
})
export class OtherPrimaryNamePageModule {}
