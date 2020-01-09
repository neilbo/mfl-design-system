import { NgModule } from "@angular/core";
import { CodeSnippetComponent } from "./code-snippet/code-snippet.component";
import { IonicModule } from '@ionic/angular';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
@NgModule({
      declarations: [CodeSnippetComponent, ValidationErrorComponent],
      exports: [CodeSnippetComponent, ValidationErrorComponent],
      imports: [IonicModule, CommonModule]
  })
  export class ComponentsModule {}
  