import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColoursPage } from './colours.page';

describe('ColoursPage', () => {
  let component: ColoursPage;
  let fixture: ComponentFixture<ColoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
