import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-new-component',
  template:
                `
      <h1> {{"Hello " + parentData}}</h1>
      <button (click)= "fireevent()">Send Data</button>
              `
              ,
  styles: [
  ]
})
export class NewComponentComponent implements OnInit {
  public colors=['red', 'black','white','green'];
  public name="Vishwas";
  public displayname=true;
  @Input() public parentData;
  @Output() public childemitter= new EventEmitter();
  constructor() {

  }
  ngOnInit(): void {
  }
  fireevent(){
        this.childemitter.emit('hello from new component');
  }
}
