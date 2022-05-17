import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Section } from 'src/app/interfaces/interfaces';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.css']
})
export class ContentMenuComponent implements OnInit {
  
  contentSections: Section[] = [];
  sectionsScrollY: number[] = [];
  showList = true; 
  
  constructor( 
    private commonService: CommonService,
    private scroller: ViewportScroller,
  ) { }

  ngOnInit(): void {

    this.commonService.contetSections$.pipe(
      tap( resp => resp[0].id == 'none' ? this.showList = false : this.showList = true )
    ).subscribe( resp => {
      this.contentSections = resp
      this.setScrollingValues();
      console.log(this.sectionsScrollY);
    })
   
  }


  onThePage( section: string ){
    // this.router.navigate([], { fragment: section })

    this.scroller.scrollToAnchor( section );
    this.scroller.setOffset( [0, 100] );

    // document.getElementById( section )!.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: 'start',
    // });
  }

  setScrollingValues(){
    this.sectionsScrollY = [];
    this.contentSections.forEach( section => {
      this.sectionsScrollY.push(
        document.getElementById( section.id )!.scrollTop
      )
    })
  }


}
