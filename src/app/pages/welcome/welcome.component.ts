import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( 
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.commonService.setContentsSections( [{id: 'none', name: ''}] )
  }

  navigateTo ( route: string ) {
    this.router.navigate([ route ]);
  }

}
