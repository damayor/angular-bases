import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h3>
      Contador: {{counter}}
    </h3>

    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
  `

})

export class CounterComponent  {

  public counter : number = 10;

  constructor() { }

  increaseBy(value: number) : void {
    this.counter += value;
  }

  resetCounter() : void {
    this.counter = 10;
  }


}
