import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoiceAndTonePageRoutingModule } from './voice-and-tone-routing.module';

import { VoiceAndTonePage } from './voice-and-tone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoiceAndTonePageRoutingModule
  ],
  declarations: [VoiceAndTonePage]
})
export class VoiceAndTonePageModule {}
