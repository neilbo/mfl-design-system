import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoAndIconPage } from './logo-and-icon.page';

describe('LogoAndIconPage', () => {
  let component: LogoAndIconPage;
  let fixture: ComponentFixture<LogoAndIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoAndIconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoAndIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
