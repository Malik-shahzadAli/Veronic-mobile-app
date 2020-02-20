import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetAQuotePageRoutingModule } from './get-a-quote-routing.module';

import { GetAQuotePage } from './get-a-quote.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GetAQuotePageRoutingModule
  ],
  declarations: [GetAQuotePage]
})
export class GetAQuotePageModule {}
