import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PwaScanPage } from './pwa-scan.page';

describe('PwaScanPage', () => {
  let component: PwaScanPage;
  let fixture: ComponentFixture<PwaScanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaScanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PwaScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
