import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToastsPage } from './toasts.page';

describe('ToastsPage', () => {
  let component: ToastsPage;
  let fixture: ComponentFixture<ToastsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
