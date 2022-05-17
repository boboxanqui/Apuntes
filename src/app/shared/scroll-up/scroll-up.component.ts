import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.css']
})
export class ScrollUpComponent implements OnInit  {

  constructor( private viewport: ViewportScroller ) { }

  ngOnInit(): void {

  }

  scrollUp(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  // Observable que devuelve true si scroll Y es mayor que 300
  scrollY$: Observable<boolean> = fromEvent(
    document,'scroll'
  ).pipe(
    map( () => this.viewport.getScrollPosition()[1] > 300)
  )

  // Observable que devuelve el valor de scroll Y
  scrollYnum$: Observable<number> = fromEvent(
    document,'scroll'
  ).pipe(
    map( () => this.viewport.getScrollPosition()[1])
  )

}
