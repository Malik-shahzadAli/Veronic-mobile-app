import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherOtpTypePage } from './other-otp-type.page';

describe('OtherOtpTypePage', () => {
  let component: OtherOtpTypePage;
  let fixture: ComponentFixture<OtherOtpTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherOtpTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherOtpTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
