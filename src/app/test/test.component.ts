import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}!
    </h2>
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError? 'red' : 'green'">Style Binding 2</h2>
    <h2 [style.color]="highlightColor">Style Binding 3</h2>
    <h2 [ngStyle]="titleStyle">Style Binding 4</h2>
    
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'Piyush';
  public hasError = false;
  public isSpacial = true;
  public highlightColor = 'orange';
  public titleStyle = {
    color:'blue',
    fontStyle:'italic'
  };
 
  constructor() { }

  ngOnInit() {
  }
}
