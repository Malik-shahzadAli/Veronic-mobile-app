import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetAQuotePage } from './get-a-quote.page';

describe('GetAQuotePage', () => {
  let component: GetAQuotePage;
  let fixture: ComponentFixture<GetAQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAQuotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetAQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
