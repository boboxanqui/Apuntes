import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/interfaces/interfaces';
import { CommonService } from 'src/app/services/common.service';

import { bootstrapApplication } from '@angular/platform-browser';
import {
  HighlightAutoResult,
  HighlightLoader,
  HighlightOptions,
  HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs';


@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],

})
export class HtmlComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setContentsSections(this.sections)
  }

  code: string | null = `
      <html>    
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Your Website</title>
            </head>

            <body>

                <header>
                    <nav>
                        <ul>
                            <li>Your menu</li>
                        </ul>
                    </nav>
                </header>
                
                <section>
                    <article>
                        <header>
                            <h2>Article title</h2>
                            <p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p>
                        </header>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </article>
                    
                    <article>
                        <header>
                            <h2>Article title</h2>
                            <p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p>
                        </header>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </article>   
                </section>

                <aside>
                    <h2>About section</h2>
                    <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </aside>

                <footer>
                    <p>Copyright 2009 Your name</p>
                </footer>
                
            </body>
        </html>
      `;

  sections: Section[] = [
    {
      id: 'estructura',
      name: 'Esctructura'
    },
    {
      id: 'formato',
      name: 'Formato'
    },
    {
      id: 'atributos-generales',
      name: 'Atributos generales'
    },
    {
      id: 'listas',
      name: 'Listas'
    },
    {
      id: 'multimedia',
      name: 'Multimedia'
    },
    {
      id: 'links',
      name: 'Links'
    },
    {
      id: 'tablas',
      name: 'Tablas'
    },
    {
      id: 'formularios',
      name: 'Formularios'
    },
    {
      id: 'otros',
      name: 'Otros'
    },
    {
      id: 'estructura-basica',
      name: 'Estructura básica'
    },

  ]

}

bootstrapApplication(HtmlComponent, {
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        themePath: 'node_modules/highlight.js/styles/github.css',
        // languages: {
        //   typescript: () => import('highlight.js/lib/languages/typescript'),
        //   css: () => import('highlight.js/lib/languages/css'),
        //   xml: () => import('highlight.js/lib/languages/xml'),
        // },
      },
    },
  ],
});