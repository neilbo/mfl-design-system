import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloatingActionButtonsPage } from './floating-action-buttons.page';

describe('FloatingActionButtonsPage', () => {
  let component: FloatingActionButtonsPage;
  let fixture: ComponentFixture<FloatingActionButtonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingActionButtonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingActionButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
