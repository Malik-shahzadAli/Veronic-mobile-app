import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DobComponent } from './dob.component';

describe('DobComponent', () => {
  let component: DobComponent;
  let fixture: ComponentFixture<DobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
