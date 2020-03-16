import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwaScanPageRoutingModule } from './pwa-scan-routing.module';

import { PwaScanPage } from './pwa-scan.page';
import { ScanditSdkModule } from 'scandit-sdk-angular';

const licenseKey = "AWUekwDOHtCONe5y80B+D5EfgeuqEfrvxHGo8Jt4ALXqYCY8yC6rtR1KgTTtSB+ARUqHlq9o+DtiNnqDz3eDW1p8BMV+avGAaxhhUY4sQrwtb33F+VWYNygfV8yrPwZP0yyzgrQVpN/kIz/jW3jrXX+bIU49UcIVWxu0xGB/lARoOYzJCEXq3RILuqBIj7EKxh7Fwtu3zqaZj+7ofj1jd5a13D6LTHj5pnRBSDc1cuqcHiCruNDRG+zWPmFK5VZCFVQ5ifE4y/6gYA7Kh4OSj4bQvpM2zY+BQsxFVbW1Dp6cuGATRwa+BYDdquImsBwq19cIsEQ6IcKqvt/hjxGB5gej3fHw8HTX1QOE7ZOvB4bKaXTtEU6b2vNzvnJnIbYHtICkKEPo+sIrK8eaJaRjf0wf2AxTKI6TnH6/+TyDnAIF5AGZbIjwZA3DaJYOxy9SqKfHovydj1+l8EgAGjowXdG7AGrS47mUJSIwchSQvtsJET+No3OMsnhmGPJvWq5RVOjbdzCcVy9ylenjOpLn9mCRh8WTySI+4OJDDw1/GGnPUvWSrf91dF2f+NebT8bWHvNktPznALum0izyxIlw4tAb/7kdno8ViSricTxnHqXlqinK2Itxhb22ypUpaei3q+NkNbc+xgrAj2xvOU7eBVLnHeCRRTxm+m+kMZviTBEmXTr1e0LDZR5kZYrHnYEeJkM4leoiDBhynw5uyjRBMt6AmT7lyXhfUOzTGhHG52JjNAEjyz4dB2L51PXOg4Ra7tNWu92MBI7ApcmgvF+tGieWvvousylrO6Q/B0S0DeIHX1n2PDZth5dD";
const engineLocation = "assets/";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwaScanPageRoutingModule,
    ScanditSdkModule.forRoot(licenseKey, engineLocation)
  ],
  declarations: [PwaScanPage]
})
export class PwaScanPageModule {}
