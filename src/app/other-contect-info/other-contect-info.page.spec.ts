import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherContectInfoPage } from './other-contect-info.page';

describe('OtherContectInfoPage', () => {
  let component: OtherContectInfoPage;
  let fixture: ComponentFixture<OtherContectInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherContectInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherContectInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
