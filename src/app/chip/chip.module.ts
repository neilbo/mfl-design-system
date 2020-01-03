import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipPageRoutingModule } from './chip-routing.module';

import { ChipPage } from './chip.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ChipPage]
})
export class ChipPageModule {}
