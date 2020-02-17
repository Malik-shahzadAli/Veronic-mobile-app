import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecDriverEducationComponent } from './sec-driver-education.component';

describe('SecDriverEducationComponent', () => {
  let component: SecDriverEducationComponent;
  let fixture: ComponentFixture<SecDriverEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecDriverEducationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecDriverEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
