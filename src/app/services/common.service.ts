import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Section } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private _contentSections = new Subject<Section[]>();

  get contetSections$(): Observable<Section[]> {
    return this._contentSections
  }
  
  setContentsSections( sectionList: Section[] ){
    this._contentSections.next(sectionList);
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
