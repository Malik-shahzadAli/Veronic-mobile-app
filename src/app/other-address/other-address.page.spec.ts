import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherAddressPage } from './other-address.page';

describe('OtherAddressPage', () => {
  let component: OtherAddressPage;
  let fixture: ComponentFixture<OtherAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
