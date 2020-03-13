import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnotherDriverPageRoutingModule } from './add-another-driver-routing.module';

import { AddAnotherDriverPage } from './add-another-driver.page';
import { TranslateModule } from '@ngx-translate/core';
import { SecDriverEducationComponent } from './sec-driver-education/sec-driver-education.component';
import { SecondryDriverInfoComponent } from './secondry-driver-info/secondry-driver-info.component';
import { DobComponent } from './dob/dob.component';
import { DriverRelationshipComponent } from './driver-relationship/driver-relationship.component';
import { SecDriverAccidentInfoComponent } from './sec-driver-accident-info/sec-driver-accident-info.component';
import { IsEmployedComponent } from './is-employed/is-employed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    AddAnotherDriverPageRoutingModule
  ],
  // declarations: [AddAnotherDriverPage]
  declarations: [
    AddAnotherDriverPage,
    SecondryDriverInfoComponent,
    DobComponent,
    DriverRelationshipComponent,
    SecDriverAccidentInfoComponent,
    SecDriverEducationComponent,
    IsEmployedComponent
  ]
})
export class AddAnotherDriverPageModule {}
