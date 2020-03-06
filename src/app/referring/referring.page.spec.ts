import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferringPage } from './referring.page';

describe('ReferringPage', () => {
  let component: ReferringPage;
  let fixture: ComponentFixture<ReferringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
