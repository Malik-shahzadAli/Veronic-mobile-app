import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuranceTypePage } from './insurance-type.page';

describe('InsuranceTypePage', () => {
  let component: InsuranceTypePage;
  let fixture: ComponentFixture<InsuranceTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
