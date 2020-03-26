import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnotherDriverPage } from './add-another-driver.page';
import { SecondryDriverInfoComponent } from './secondry-driver-info/secondry-driver-info.component';
import { DobComponent } from './dob/dob.component';
import { DriverRelationshipComponent } from './driver-relationship/driver-relationship.component';
import { SecDriverAccidentInfoComponent } from './sec-driver-accident-info/sec-driver-accident-info.component';
import { SecDriverEducationComponent } from './sec-driver-education/sec-driver-education.component';
import { IsEmployedComponent } from './is-employed/is-employed.component';

const routes: Routes = [
  {
    path: '',
    component: AddAnotherDriverPage
  },
  {
    path: 'secondry-driver-info',
    component: SecondryDriverInfoComponent
  },
  {
    path: 'dob',
    component: DobComponent
  },
  {
    path: 'relationship',
    component: DriverRelationshipComponent
  },
  {
    path: 'accident',
    component: SecDriverAccidentInfoComponent
  },
  {
    path: 'education',
    component: SecDriverEducationComponent
  },
  {
    path: 'is-employed',
    component: IsEmployedComponent
  },
  {
    path: 'dgender',
    loadChildren: () => import('./dgender/dgender.module').then( m => m.DgenderPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AddAnotherDriverPageRoutingModule {}
