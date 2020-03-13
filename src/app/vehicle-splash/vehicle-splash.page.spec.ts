import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleSplashPage } from './vehicle-splash.page';

describe('VehicleSplashPage', () => {
  let component: VehicleSplashPage;
  let fixture: ComponentFixture<VehicleSplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSplashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
