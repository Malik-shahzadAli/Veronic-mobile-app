import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsCustomerEmployeedPageRoutingModule } from './is-customer-employeed-routing.module';

import { IsCustomerEmployeedPage } from './is-customer-employeed.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    IsCustomerEmployeedPageRoutingModule
  ],
  declarations: [IsCustomerEmployeedPage]
})
export class IsCustomerEmployeedPageModule {}
