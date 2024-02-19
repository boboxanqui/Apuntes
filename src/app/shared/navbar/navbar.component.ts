import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.getCurrentNavigation()
  }

  // FIXME: OLD NAVBAR
  links = [
    {
      htmlContent: `<i class="fa-brands fa-html5 fs1-5"></i>
      <span class="mono fs1-5">HTML</span>`,
      route: 'html'
    },
    {
      htmlContent: `<i class="fa-brands fa-css3-alt fs1-5"></i>
      <span class="mono fs1-5">CSS</span>`,
      route: 'css'
    },
    {
      htmlContent: `<i class="fa-brands fa-sass fs1-5"></i>
      <span class="mono fs1-5">SASS</span>`,
      route: 'sass'
    },
    {
      htmlContent: `<div class="typescript-logo">TS</div>
      <span class="mono fs1-5">TypeScript</span>`,
      route: 'typescript'
    },
    {
      htmlContent: `<i class="fa-brands fa-angular fs1-5"></i>
      <span class="mono fs1-5">Angular</span>`,
      route: 'angular'
    },
    {
      htmlContent: `<i class="fa-brands fa-git-alt fs1-5"></i>
      <span class="mono fs1-5">Git</span>`,
      route: 'git'
    }
  ]

  activeLink = this.links[0];

  // NOTE: NEW NAVBAR 
  private _navSelectionLeft: number = 100;

  selectedRoute(link: HTMLElement, navSelection: HTMLElement) {
    this._navSelectionLeft = link.offsetLeft + link.offsetWidth / 2;

    if (navSelection.className.includes('hide')) {
      navSelection.style.left = this.navSelectionLeft;
      navSelection.classList.remove('hide');
      setTimeout(() =>
        navSelection.classList.add('active'),
        1
      )
    } else {
      navSelection.style.left = this.navSelectionLeft;
    }
  }

  hideSelectedRoute(navSelection: HTMLElement) {
    navSelection.classList.remove('active')
    navSelection.classList.add('hide')
  }

  get navSelectionLeft() {
    return this._navSelectionLeft.toString().concat('px');
  }


}
