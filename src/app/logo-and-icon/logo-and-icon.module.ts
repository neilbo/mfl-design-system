import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoAndIconPageRoutingModule } from './logo-and-icon-routing.module';

import { LogoAndIconPage } from './logo-and-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoAndIconPageRoutingModule
  ],
  declarations: [LogoAndIconPage]
})
export class LogoAndIconPageModule {}
