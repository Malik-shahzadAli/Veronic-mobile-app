import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwaScanPageRoutingModule } from './pwa-scan-routing.module';

import { PwaScanPage } from './pwa-scan.page';
import { ScanditSdkModule } from 'scandit-sdk-angular';

const licenseKey = 'ARv+PhTOCha6Htq91w/asSQ0VGsHRkfIECzMd3AOa7tLQrf1Syn4j1pxdqWMRSc7BTE+Jp5nMtuQXzZk6RhU1dhrJkx6QNdXxWLtOi5nqICKPlp2/mLQOtNzeQ6+d9vBnzVQDKEZvCI/G/9digk6I9AZkyy62KnKKE9mOUZVHdevS/H8MU/9yGQi1Uv9ecXw1IRa9XjIyEYtlNcC1UfQsBGm9AchYUsED+xBf3vEC1XWynT2yEDUIE3u1pfwhk/hmrL8aebPX/BtqG8WbZXHYDZp0s95S+8ydut+WY/Fw8jWa3XN1fM5xG7MTlz3KFj0MRO6k3XsbqTYgxCa/3VGSCt78qf0ZRKgq2Q8sLzYuOdFgGoP9ZSI5Ct5DKB0lprtT09or/bbLlkb8UrYlxu1IY8jiI6dLNc13mmVF0OTyITShMEinDCT99H7CKPWc4YquwStdO4whcoRAwNkOCuH2uC/7+8TlUyFAYDOKh1M6FsgBOk9DMcxH7OhaBntntbgEJxPBnEc7M1DebvRyKVhaDET9IQ9SHpF5nnTrAfycndqlTbiS++fT22stJ4BD9/xiM2QwOriHJ68eQZ9bdxBiHf7vwDzvC7/+ki1/sC+rL1SZFZFkvUaXSEMhUM6NRX3a1lk+rHjFelZofI0gHnUNtE8ltGU5KBqdzRo2sHCkssjT2A6sMlb1yF8kEwQjsZXNF/Dq4erXVTHnVG7Aza/QQhjF3m5tgFguE1KlGU3qGfMzt7IPS15Ekp6XAKTCTWAS6L2KHY3YhwsQM7MlaEtCX/foeH824zQOk5D1ZaJjtkgqjdQxmXAcVveKGuC2hreVhA=';
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
