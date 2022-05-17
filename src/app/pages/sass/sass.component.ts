import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/interfaces/interfaces';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.css']
})
export class SassComponent implements OnInit {

  constructor( private commonService: CommonService) { }

  ngOnInit(): void {

    this.commonService.setContentsSections( this.sections )
  }

  sections: Section[] = [
    {
      id: 'compilacion',
      name: 'Compilación'
    },
    {
      id: 'variables',
      name: 'Variables'
    },
    {
      id: 'sass-maps',
      name: 'Maps'
    },
    {
      id: 'selectores-anidados',
      name: 'Selectores anidados'
    },
    {
      id: 'import',
      name: '@import'
    },
    {
      id: 'sass-function',
      name: '@function'
    },
    {
      id: 'mixin',
      name: '@mixin'
    },
    {
      id: 'sass-extend',
      name: '@extend'
    },
    {
      id: 'sass-operadores',
      name: 'Operadores'
    },
    {
      id: 'sass-colores',
      name: 'Colores'
    },

  ]

}
