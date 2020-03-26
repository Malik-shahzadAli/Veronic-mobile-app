import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsCustomerEmployeedPage } from './is-customer-employeed.page';

describe('IsCustomerEmployeedPage', () => {
  let component: IsCustomerEmployeedPage;
  let fixture: ComponentFixture<IsCustomerEmployeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsCustomerEmployeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsCustomerEmployeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
