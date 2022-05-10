import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  currentRoute: any;
  constructor(public location: Location) {
    console.log('this.router. location()', this.location.path());
    this.currentRoute = this.location.path();
  }

  ngOnInit() {
  }
}
