import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesignPrinciplesPage } from './design-principles.page';

describe('DesignPrinciplesPage', () => {
  let component: DesignPrinciplesPage;
  let fixture: ComponentFixture<DesignPrinciplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPrinciplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesignPrinciplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
