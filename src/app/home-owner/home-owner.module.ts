import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeOwnerPageRoutingModule } from './home-owner-routing.module';

import { HomeOwnerPage } from './home-owner.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    HomeOwnerPageRoutingModule
  ],
  declarations: [HomeOwnerPage]
})
export class HomeOwnerPageModule {}
