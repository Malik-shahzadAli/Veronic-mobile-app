import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsEmployedComponent } from './is-employed.component';

describe('IsEmployedComponent', () => {
  let component: IsEmployedComponent;
  let fixture: ComponentFixture<IsEmployedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsEmployedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
