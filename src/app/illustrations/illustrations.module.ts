import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IllustrationsPageRoutingModule } from './illustrations-routing.module';

import { IllustrationsPage } from './illustrations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IllustrationsPageRoutingModule
  ],
  declarations: [IllustrationsPage]
})
export class IllustrationsPageModule {}
