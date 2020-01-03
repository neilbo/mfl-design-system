import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoAndIconPage } from './logo-and-icon.page';

const routes: Routes = [
  {
    path: '',
    component: LogoAndIconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoAndIconPageRoutingModule {}
