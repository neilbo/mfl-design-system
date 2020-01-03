import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingActionButtonsPage } from './floating-action-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingActionButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingActionButtonsPageRoutingModule {}
