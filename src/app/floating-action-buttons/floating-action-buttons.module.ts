import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingActionButtonsPageRoutingModule } from './floating-action-buttons-routing.module';

import { FloatingActionButtonsPage } from './floating-action-buttons.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingActionButtonsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [FloatingActionButtonsPage]
})
export class FloatingActionButtonsPageModule {}
