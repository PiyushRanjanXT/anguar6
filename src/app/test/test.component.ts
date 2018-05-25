import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)]="name" type="text" />
    <h2>{{name}}</h2>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = '';

  constructor() { }

  ngOnInit() {
  }
}
