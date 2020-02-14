import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacingPage } from './spacing.page';

const routes: Routes = [
  {
    path: '',
    component: SpacingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacingPageRoutingModule {}
