import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacingPageRoutingModule } from './spacing-routing.module';

import { SpacingPage } from './spacing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacingPageRoutingModule
  ],
  declarations: [SpacingPage]
})
export class SpacingPageModule {}
