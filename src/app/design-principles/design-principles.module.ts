import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignPrinciplesPageRoutingModule } from './design-principles-routing.module';

import { DesignPrinciplesPage } from './design-principles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignPrinciplesPageRoutingModule
  ],
  declarations: [DesignPrinciplesPage]
})
export class DesignPrinciplesPageModule {}
