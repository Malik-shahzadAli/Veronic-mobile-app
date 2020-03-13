import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimaryNamePage } from './primary-name.page';

describe('PrimaryNamePage', () => {
  let component: PrimaryNamePage;
  let fixture: ComponentFixture<PrimaryNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
