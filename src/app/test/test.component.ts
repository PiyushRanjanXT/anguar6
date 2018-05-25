import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}!
    </h2>
    <button (click)="onClick($event)" >Greet</button>
    <button (click)="greeting = 'Thanks for visiting !'" >Greet</button>
    <h2>{{greeting}}</h2>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'Piyush';
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    this.greeting = 'Welcome to Angular 6';
    console.log(event);
  }
}
