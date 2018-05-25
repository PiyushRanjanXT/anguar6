import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}!
    </h2>
    <input #myInput type="text" />
    <button (click)="logFn(myInput)">Log</button>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'Piyush';

  constructor() { }

  ngOnInit() {
  }
  logFn(myInput){
    console.log(myInput);
    console.log(myInput.value);
  }
}
