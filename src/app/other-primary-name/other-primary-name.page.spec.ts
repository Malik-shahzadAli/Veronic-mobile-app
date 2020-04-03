import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherPrimaryNamePage } from './other-primary-name.page';

describe('OtherPrimaryNamePage', () => {
  let component: OtherPrimaryNamePage;
  let fixture: ComponentFixture<OtherPrimaryNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPrimaryNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherPrimaryNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
