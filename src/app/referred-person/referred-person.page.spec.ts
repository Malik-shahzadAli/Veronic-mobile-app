import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferredPersonPage } from './referred-person.page';

describe('ReferredPersonPage', () => {
  let component: ReferredPersonPage;
  let fixture: ComponentFixture<ReferredPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferredPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferredPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
