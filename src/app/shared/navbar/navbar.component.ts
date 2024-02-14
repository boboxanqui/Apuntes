import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  links = [
    {
      htmlContent:`<i class="fa-brands fa-html5 fs1-5"></i>
      <span class="mono fs1-5">HTML</span>`,
      route: 'html'
    },
    {
      htmlContent:`<i class="fa-brands fa-css3-alt fs1-5"></i>
      <span class="mono fs1-5">CSS</span>`,
      route: 'css'
    },
    {
      htmlContent:`<i class="fa-brands fa-sass fs1-5"></i>
      <span class="mono fs1-5">SASS</span>`,
      route: 'sass'
    },
    {
      htmlContent: `<div class="typescript-logo">TS</div>
      <span class="mono fs1-5">TypeScript</span>`,
      route: 'typescript'
    },
    {
      htmlContent:`<i class="fa-brands fa-angular fs1-5"></i>
      <span class="mono fs1-5">Angular</span>`,
      route: 'angular'
    },
    {
      htmlContent:`<i class="fa-brands fa-git-alt fs1-5"></i>
      <span class="mono fs1-5">Git</span>`,
      route: 'git'
    }
  ]

  activeLink = this.links[0];


  selectedLink(link: any){
    this.activeLink = link;

    this.router.navigate( [link.route] )
  }
}
