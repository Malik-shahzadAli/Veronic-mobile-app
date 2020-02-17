import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverEducationPage } from './driver-education.page';

describe('DriverEducationPage', () => {
  let component: DriverEducationPage;
  let fixture: ComponentFixture<DriverEducationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverEducationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverEducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
