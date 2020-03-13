import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAnotherDriverPage } from './add-another-driver.page';

describe('AddAnotherDriverPage', () => {
  let component: AddAnotherDriverPage;
  let fixture: ComponentFixture<AddAnotherDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnotherDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnotherDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
