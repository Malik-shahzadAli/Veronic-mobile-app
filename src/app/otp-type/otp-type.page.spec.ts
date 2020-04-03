import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpTypePage } from './otp-type.page';

describe('OtpTypePage', () => {
  let component: OtpTypePage;
  let fixture: ComponentFixture<OtpTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
