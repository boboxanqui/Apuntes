import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { SassComponent } from './sass/sass.component';



@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    TypescriptComponent,
    WelcomeComponent,
    SassComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
