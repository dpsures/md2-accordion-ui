import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accordions: Array<any> = [
    { title: 'Learning Material - 1', content: 'Angular 4 - Introduction' }
  ];

  multiple: boolean = false;

}
