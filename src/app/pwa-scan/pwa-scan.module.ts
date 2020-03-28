import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwaScanPageRoutingModule } from './pwa-scan-routing.module';

import { PwaScanPage } from './pwa-scan.page';
import { ScanditSdkModule } from 'scandit-sdk-angular';

const licenseKey = 'AQZO9xraBEkNL00Y2B3FjawGLF+INUj7CE7ZEkdxuFB1RUmD+FGoZSAztNTXQpNdZ3AOl4NUtfQFbIzg8FlzR1pKUgfxfz7Ury+uovZarWmWKxDHwHQA9kNZGXo0R7V/uwqyii0FzQgYJij1aiSefVK0PEGSqVSpywTNLk6mGjHi9nx9fjD5//U+dr6E1GBDP9xY7cV3lw1QNjVFynDoLx1P+Nx+XJZ0wzXmSrBR/4KPuEhnCuISgVIMU5aDF14dWMRchtMIxsVsAt9PMiY613mmPbYkMfPN/QUbxta2vhyGg+eyyqJSAmPBnnc+2TaJVee2Bbuq20oj2cQoB5qIoFgBOhsHO43d/6eH/xCfd9NkxnTDNQ2r3z5YVaw4TErAKRbW8jeA8qphyBljWE4v33gUoZG2Ae6fPAWjIKEMcs/Zu5zrMvcaNKBb62gDkLtMRC4KrZ+B9VuqWuozmcLcxgU98ignzAVfS9hUZGgTz0Az8FEJw3qeMa9nitlIAuhkbVgFtk4gnqBvxAiUTuseFeA3h5+K1C/k7p6qPm+IoONNyEU8C1qmSvjGuZFOA9YYqFPrnLIqtP0aaSAZxGjyK/MwTfLiS+1zv3gl/MoHnh7ym6joMTP8vacg7shpu5sbCgWNI7RUeKOV3N5ZofDo6SV+ozWW/rVNoa6Chk4NF55OgagtWLnrBW/Zf4OKfTsn3pJFX35F85f4hgC1zu04ctLlPK64fQoCz9vQke5HwLhzKq9e4plMW5RADFZTDPbqD8Hm23rGaRwweCaWSxzbhKVe7FDtv3C2maaBwsk0vUk288JluRsm+vNFmqJE';
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
