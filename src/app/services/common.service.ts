import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Section } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private _contentSections = new Subject<Section[]>();
  private _htmlElements!: HTMLCollectionOf<Element>;

  private _pageLink$ = new Subject<String>();

  get contetSections$(): Observable<Section[]> {
    return this._contentSections
  }
  
  get pageLink$(): Observable<String>{
    return this._pageLink$
  }
  
  setContentsSections( sectionList: Section[] ){
    this._contentSections.next(sectionList);
  }

  setPageLink$ (link: string){
    this._pageLink$.next(link)
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
