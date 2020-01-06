import { NgModule } from "@angular/core";
import { CodeSnippetComponent } from "./code-snippet/code-snippet.component";
import { IonicModule } from '@ionic/angular';
@NgModule({
      declarations: [CodeSnippetComponent],
      exports: [CodeSnippetComponent],
      imports: [IonicModule]
  })
  export class ComponentsModule {}
  