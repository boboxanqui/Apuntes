import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor( private commonService: CommonService, private router: Router ) { }
  
  ngAfterViewInit(): void {
    // this.commonService.pageLink$.subscribe( link => {
    //   if( link === 'html'){
    //     this.selectedRoute(this.htmlNavLink, this.navSelection)
    //   }
    // })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const page = event.url.slice(1)
      switch (page){
        case 'html': this.selectedRoute(this.htmlNavLink,this.navSelection);
          break;
        
        case 'css': this.selectedRoute(this.cssNavLink,this.navSelection);
          break;
        
        case 'sass': this.selectedRoute(this.sassNavLink,this.navSelection);
          break;
        
        case 'typescript': this.selectedRoute(this.typescriptNavLink,this.navSelection);
          break;
        
        case 'angular': this.selectedRoute(this.angularNavLink,this.navSelection);
          break;
        
        case 'git': this.selectedRoute(this.gitNavLink,this.navSelection);
          break;
        
        default: this.hideSelectedRoute();

      }
    });
    
  }

  ngOnInit(): void {
  }

  @ViewChild('navLink1') htmlNavLink!: ElementRef<HTMLElement>;
  @ViewChild('navLink2') cssNavLink!: ElementRef<HTMLElement>;
  @ViewChild('navLink3') sassNavLink!: ElementRef<HTMLElement>;
  @ViewChild('navLink4') typescriptNavLink!: ElementRef<HTMLElement>;
  @ViewChild('navLink5') angularNavLink!: ElementRef<HTMLElement>;
  @ViewChild('navLink6') gitNavLink!: ElementRef<HTMLElement>;
  @ViewChild('navSelection') navSelection!: ElementRef<HTMLElement>;

  private _navSelectionLeft: number = 100;

  selectedRoute(link: ElementRef<HTMLElement>, navSelection: ElementRef<HTMLElement>) {
    this._navSelectionLeft = link.nativeElement.offsetLeft + link.nativeElement.offsetWidth / 2;

    if (navSelection.nativeElement.className.includes('hide')) {
      navSelection.nativeElement.style.left = this.navSelectionLeft;
      navSelection.nativeElement.classList.remove('hide');
      setTimeout(() =>
        navSelection.nativeElement.classList.add('active'),
        1
      )
    } else {
      navSelection.nativeElement.style.left = this.navSelectionLeft;
    }
  }

  hideSelectedRoute() {
    this.navSelection.nativeElement.classList.remove('active')
    this.navSelection.nativeElement.classList.add('hide')
  }

  get navSelectionLeft() {
    return this._navSelectionLeft.toString().concat('px');
  }
}