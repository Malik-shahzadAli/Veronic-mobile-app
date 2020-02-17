import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarriageStatusPage } from './marriage-status.page';

describe('MarriageStatusPage', () => {
  let component: MarriageStatusPage;
  let fixture: ComponentFixture<MarriageStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarriageStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
