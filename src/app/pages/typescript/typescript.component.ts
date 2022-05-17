import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/interfaces/interfaces';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  constructor( private commonService: CommonService ) { }

  ngOnInit(): void {

    this.commonService.setContentsSections( this.sections )
  }

  sections: Section[] = [
    {
      id: 'como-utilizarlo',
      name: 'Como utilizarlo',
    },
    {
      id: 'tsconfig',
      name: 'Archivo tsconfig.json',
    },
    {
      id: 'ts-variables',
      name: 'Variables',
    },
    {
      id: 'ts-parametros',
      name: 'Parámetros',
    },
    {
      id: 'ts-arrays',
      name: 'Arrays',
    },
    {
      id: 'custom-types',
      name: 'Custom Types',
    },
    {
      id: 'type-guards',
      name: 'Type Guards',
    },
    {
      id: 'ts-objectos',
      name: 'Objectos',
    },
    {
      id: 'ts-interfaces',
      name: 'Interfaces',
    },
    {
      id: 'ts-classes',
      name: 'Classes',
    },
    {
      id: 'interface-vs-class',
      name: 'Interface VS Class',
    },
    {
      id: 'ts-decoradores',
      name: 'Decoradores',
    },
  ]
}
