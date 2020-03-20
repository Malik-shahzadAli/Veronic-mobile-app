import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwaScanPageRoutingModule } from './pwa-scan-routing.module';

import { PwaScanPage } from './pwa-scan.page';
import { ScanditSdkModule } from 'scandit-sdk-angular';

const licenseKey = 'AUBuzQrSFLMkKmSYZSmIUNspayuxCCHcg2RatARbZSFLZmq+91m+argrSmHDb45CNF7j4mYzYOj4TMe8VGPKmNlxi4jUNOt7zAs94lh1Ey4qWkw+BGqEJ/ptQFjndTbtCgHzckAjMIGSH5Kfe39SLApIcErc+k7yAg5rFfHfvHt1MQVKDvBmKyxwl1CuTJOgscvlWLlpWLp5VFhOOWAyI5HzG7lNJv0eX5iF8/gJL5SzJ8KhD9I4mM7ysGAyLeOIaBeh0MRoWgnXmLcVcctoot09ayHkC8C0is6XgZMQOGEWoET2I2rG9qImtXc6llXZVZsCOZdUwwe4frJILRjI7uwE+tTBKBytYAAS7VdVsBqCIA8pxzGoqJHEtiwHLiP3MnFGleJppS8D5ymvKypmeVldacuIePutDns/RafT0MV+zlz2lMAXemo1KcQXAGlussnzw7l/tV+ZIFZFSKumhjHIrbsoThKn86w+weOLtVeiTknAoE7N+qGwau/Zo2wIrfcL2s+eCklB8ddBR2+af2YUtYK82n7d6ZJj8k2WQIa0D3pnkLCn6pXwqRYgFi2G5vEh4v0QJ2BCfhsiKVtDA1fwmvFka2kApaGTALMgk+j2Hm4Jty9Rcy8pHNx4y/f4DhMbogNNljpDB7ObryxtXmySMXlkBrYZPAnNhjbDuu/GztqzpBZpeydIld2kXkvWJ2G4lfDQOAXNNh3UDA+1opm91cEBVaR5SlX9wnMy4zbbVls3jgAFt3dez/oufLEFRDrInGK3nhQD/+i9DMUVSXmZ34MSoaWrajGB/2LKrVMqKyPdT78cTuxl8gKV';
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
