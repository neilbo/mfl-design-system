import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoiceAndTonePage } from './voice-and-tone.page';

describe('VoiceAndTonePage', () => {
  let component: VoiceAndTonePage;
  let fixture: ComponentFixture<VoiceAndTonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceAndTonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoiceAndTonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
