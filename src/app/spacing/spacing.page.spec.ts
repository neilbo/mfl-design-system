import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacingPage } from './spacing.page';

describe('SpacingPage', () => {
  let component: SpacingPage;
  let fixture: ComponentFixture<SpacingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
