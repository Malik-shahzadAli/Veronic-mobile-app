import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVehicleByYearMakeModelPage } from './add-vehicle-by-year-make-model.page';

describe('AddVehicleByYearMakeModelPage', () => {
  let component: AddVehicleByYearMakeModelPage;
  let fixture: ComponentFixture<AddVehicleByYearMakeModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleByYearMakeModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVehicleByYearMakeModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
