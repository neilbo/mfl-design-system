import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IllustrationsPage } from './illustrations.page';

describe('IllustrationsPage', () => {
  let component: IllustrationsPage;
  let fixture: ComponentFixture<IllustrationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IllustrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
