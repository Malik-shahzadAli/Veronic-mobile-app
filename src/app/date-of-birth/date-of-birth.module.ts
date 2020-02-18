import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DateOfBirthPageRoutingModule } from './date-of-birth-routing.module';

import { DateOfBirthPage } from './date-of-birth.page';

import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    DateOfBirthPageRoutingModule
  ],
  declarations: [DateOfBirthPage]
})
export class DateOfBirthPageModule {}
