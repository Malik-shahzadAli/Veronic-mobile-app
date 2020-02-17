import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentInfoPageRoutingModule } from './accident-info-routing.module';

import { AccidentInfoPage } from './accident-info.page';
import { TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AccidentInfoPageRoutingModule
  ],
  declarations: [AccidentInfoPage]
})
export class AccidentInfoPageModule {}
