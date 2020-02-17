import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverSplashPage } from './driver-splash.page';

describe('DriverSplashPage', () => {
  let component: DriverSplashPage;
  let fixture: ComponentFixture<DriverSplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSplashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
