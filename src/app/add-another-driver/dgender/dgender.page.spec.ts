import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DgenderPage } from './dgender.page';

describe('DgenderPage', () => {
  let component: DgenderPage;
  let fixture: ComponentFixture<DgenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DgenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
