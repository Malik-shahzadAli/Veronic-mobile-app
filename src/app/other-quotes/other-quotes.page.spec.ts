import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherQuotesPage } from './other-quotes.page';

describe('OtherQuotesPage', () => {
  let component: OtherQuotesPage;
  let fixture: ComponentFixture<OtherQuotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherQuotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherQuotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
