import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PrimaryNamePageRoutingModule } from './primary-name-routing.module';

import { PrimaryNamePage } from './primary-name.page';

import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    PrimaryNamePageRoutingModule
  ],
  declarations: [PrimaryNamePage]
})
export class PrimaryNamePageModule {}
