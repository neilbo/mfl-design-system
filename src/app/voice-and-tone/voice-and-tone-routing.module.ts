import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoiceAndTonePage } from './voice-and-tone.page';

const routes: Routes = [
  {
    path: '',
    component: VoiceAndTonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoiceAndTonePageRoutingModule {}
