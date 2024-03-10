import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { SassComponent } from './sass/sass.component';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { GitComponent } from './git/git.component';

import { HighlightModule } from 'ngx-highlightjs';




@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    TypescriptComponent,
    WelcomeComponent,
    SassComponent,
    AngularCLIComponent,
    GitComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighlightModule
  ],
  

})
export class PagesModule { }
