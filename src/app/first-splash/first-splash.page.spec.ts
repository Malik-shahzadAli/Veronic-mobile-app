import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstSplashPage } from './first-splash.page';

describe('FirstSplashPage', () => {
  let component: FirstSplashPage;
  let fixture: ComponentFixture<FirstSplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSplashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
