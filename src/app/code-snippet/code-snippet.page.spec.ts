import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeSnippetPage } from './code-snippet.page';

describe('CodeSnippetPage', () => {
  let component: CodeSnippetPage;
  let fixture: ComponentFixture<CodeSnippetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSnippetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeSnippetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
