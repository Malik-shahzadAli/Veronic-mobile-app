import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenderPageRoutingModule } from './gender-routing.module';

import { GenderPage } from './gender.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    GenderPageRoutingModule
  ],
  declarations: [GenderPage]
})
export class GenderPageModule {}
