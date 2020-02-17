import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondryDriverInfoComponent } from './secondry-driver-info.component';

describe('SecondryDriverInfoComponent', () => {
  let component: SecondryDriverInfoComponent;
  let fixture: ComponentFixture<SecondryDriverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondryDriverInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondryDriverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
