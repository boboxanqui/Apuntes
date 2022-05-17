import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Section } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private contentSections = new Subject<Section[]>();
  private htmlElements!: HTMLCollectionOf<Element>;

  get contetSections$(): Observable<Section[]> {
    return this.contentSections
  }

  setContentsSections( sectionList: Section[] ){
    this.contentSections.next(sectionList);
  }



  // setContentSections( pageSection: NodeList ) {
  //   this.contentSections = [];
  //   this.contentSections.push( pageSection );
  //   console.log(this.contentSections);
  // }

  // setHtmlCollection( pageElements: HTMLCollectionOf<Element> ){
  //   this.htmlElements = pageElements
  //   console.log(this.htmlElements);
  // }

  // linkTheSections(){
  // }

}
