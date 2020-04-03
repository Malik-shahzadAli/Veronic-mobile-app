import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherOtpPage } from './other-otp.page';

describe('OtherOtpPage', () => {
  let component: OtherOtpPage;
  let fixture: ComponentFixture<OtherOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
