import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecDriverAccidentInfoComponent } from './sec-driver-accident-info.component';

describe('SecDriverAccidentInfoComponent', () => {
  let component: SecDriverAccidentInfoComponent;
  let fixture: ComponentFixture<SecDriverAccidentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecDriverAccidentInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecDriverAccidentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
