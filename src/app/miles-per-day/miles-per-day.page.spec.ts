import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MilesPerDayPage } from './miles-per-day.page';

describe('MilesPerDayPage', () => {
  let component: MilesPerDayPage;
  let fixture: ComponentFixture<MilesPerDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesPerDayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MilesPerDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
