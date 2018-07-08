import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FrontLayoutComponent } from './components/front-layout/front-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  exports: [FrontRoutingModule],
  declarations: [HomeComponent, FrontLayoutComponent]
})
export class FrontModule { }
