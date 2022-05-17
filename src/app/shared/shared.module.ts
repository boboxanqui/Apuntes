import { NgModule } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from '../material/material.module';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ScrollUpComponent,
    ContentMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ScrollUpComponent,
    ContentMenuComponent
  ]
})
export class SharedModule { }
