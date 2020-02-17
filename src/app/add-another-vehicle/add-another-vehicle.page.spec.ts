import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAnotherVehiclePage } from './add-another-vehicle.page';

describe('AddAnotherVehiclePage', () => {
  let component: AddAnotherVehiclePage;
  let fixture: ComponentFixture<AddAnotherVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnotherVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnotherVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
