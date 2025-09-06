import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  value= signal(0);
  count= signal(0);
  valCall(val: any) {
    this.value.set(val);
  }
}
