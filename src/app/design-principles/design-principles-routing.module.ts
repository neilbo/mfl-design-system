import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignPrinciplesPage } from './design-principles.page';

const routes: Routes = [
  {
    path: '',
    component: DesignPrinciplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignPrinciplesPageRoutingModule {}
