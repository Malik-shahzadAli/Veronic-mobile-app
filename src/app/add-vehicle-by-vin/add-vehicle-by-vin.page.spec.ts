import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVehicleByVinPage } from './add-vehicle-by-vin.page';

describe('AddVehicleByVinPage', () => {
  let component: AddVehicleByVinPage;
  let fixture: ComponentFixture<AddVehicleByVinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleByVinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVehicleByVinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
