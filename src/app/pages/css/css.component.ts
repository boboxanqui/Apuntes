import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/interfaces/interfaces';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor( private commonService: CommonService) { }

  ngOnInit(): void {

    this.commonService.setContentsSections ( this.sections )
  }

  sections: Section[] = [
    {
      id:'principios',
      name: 'Princípios'
    },
    {
      id:'unidades-de-medida',
      name: 'Unidades de medida'
    },
    {
      id:'estilos-texto',
      name: 'Estilos para texto'
    },
    {
      id:'propiedades-cajas',
      name: 'Propiedades de cajas'
    },
    {
      id:'propiedades-listas',
      name: 'Propiedades de las listas'
    },
    {
      id:'propiedades-tablas',
      name: 'Propiedades de las tablas'
    },
    {
      id:'posicionamiento-disposicion',
      name: 'Posicionamiento y disposición'
    },
    {
      id:'flexbox',
      name: 'Flexbox'
    },
    {
      id:'grid',
      name: 'Grid'
    },
    {
      id:'animaciones',
      name:'Animaciones'
    },
    {
      id:'otras-propiedades',
      name: 'Otras propiedades'
    },
    {
      id:'tips-css',
      name: 'Tips'
    },
  ]

}
