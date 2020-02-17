import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinanceModePage } from './finance-mode.page';

describe('FinanceModePage', () => {
  let component: FinanceModePage;
  let fixture: ComponentFixture<FinanceModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
