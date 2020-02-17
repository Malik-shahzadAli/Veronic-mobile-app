import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeOwnerPage } from './home-owner.page';

describe('HomeOwnerPage', () => {
  let component: HomeOwnerPage;
  let fixture: ComponentFixture<HomeOwnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOwnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
