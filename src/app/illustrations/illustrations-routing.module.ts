import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IllustrationsPage } from './illustrations.page';

const routes: Routes = [
  {
    path: '',
    component: IllustrationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IllustrationsPageRoutingModule {}
