import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccidentInfoPage } from './accident-info.page';

describe('AccidentInfoPage', () => {
  let component: AccidentInfoPage;
  let fixture: ComponentFixture<AccidentInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
