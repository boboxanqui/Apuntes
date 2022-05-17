import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/interfaces/interfaces';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  constructor( private commonService: CommonService) { }

  ngOnInit(): void {

    this.commonService.setContentsSections( this.sections )

    // this.commonService.setContentSections(
    //   document.querySelectorAll('.title-2')
    // )

    // this.commonService.setHtmlCollection(
    //   document.getElementsByClassName('title-2')
    // )

  }


  sections: Section[] =[
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
