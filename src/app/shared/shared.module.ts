import { NgModule } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

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
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ScrollUpComponent,
    ContentMenuComponent
  ]
})
export class SharedModule { }
