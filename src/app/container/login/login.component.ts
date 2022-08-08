import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginTab: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {


  }

  setTab(tab: any) {
    this.loginTab = tab;
  }



}
