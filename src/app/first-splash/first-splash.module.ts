import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstSplashPageRoutingModule } from './first-splash-routing.module';

import { FirstSplashPage } from './first-splash.page';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FirstSplashPageRoutingModule
  ],
  declarations: [FirstSplashPage]
})
export class FirstSplashPageModule {}
