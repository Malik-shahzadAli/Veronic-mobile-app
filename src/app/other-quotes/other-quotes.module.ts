import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherQuotesPageRoutingModule } from './other-quotes-routing.module';

import { OtherQuotesPage } from './other-quotes.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OtherQuotesPageRoutingModule
  ],
  declarations: [OtherQuotesPage]
})
export class OtherQuotesPageModule {}
