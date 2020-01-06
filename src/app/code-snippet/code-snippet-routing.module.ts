import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeSnippetPage } from './code-snippet.page';

const routes: Routes = [
  {
    path: '',
    component: CodeSnippetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeSnippetPageRoutingModule {}
