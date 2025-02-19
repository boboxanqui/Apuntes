import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

// import { provideHighlightOptions } from "ngx-highlightjs";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    // TODO: Check ngx-highlitgh compatibility with Angular version
    // provideHighlightOptions({
    //   coreLibraryLoader: () => import('highlight.js/lib/core'),
    //   lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
    //   languages: {
    //     html: () => import('highlight.js/lib/languages/html'),
    //     typescript: () => import('highlight.js/lib/languages/typescript'),
    //     css: () => import('highlight.js/lib/languages/css'),
    //     sql: () => import('highlight.js/lib/languages/sql')
    //   },
    //   // themePath: ''
    // })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
