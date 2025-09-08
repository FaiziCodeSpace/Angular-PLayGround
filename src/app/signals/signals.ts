import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { sign } from 'node:crypto';

@Component({
  selector: 'app-signals',
  standalone: true,   // ✅ since you used imports: [], make it standalone
  templateUrl: './signals.html',
  styleUrls: ['./signals.css'] // ✅ should be plural "styleUrls"
})
export class Signals {
  value: WritableSignal<number | string> = signal(0);
  count = signal<number>(0);
  number: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      console.log('Number changed:', this.number());
    });
  }

  clickHandle(condition: string) {
    if (condition === 'increase') {
      this.number.set(this.number() + 1);
    } else if (condition === 'decrease') {
      this.number() >= 1 ? this.number.set(this.number() - 1) : null;
    }
  }

  valCall(val: any) {
    this.value.set(val);
  }


  // Computed Property
  unChangable:Signal<number>= computed(()=> 120);
  changable= signal<number>(120);
  note= '';
  increaseValue(){
    this.unChangable() + 10; // ❌ does nothing
    this.changable.update((v) => v + 10);
    this.note= 'This is a computed Value, so it is unchangable';  
    console.log(this.unChangable());
    console.log(this.changable());
  }

  // Computed Property
  x=signal(10);
  y=signal(20);
  sum= computed(()=> this.x() + this.y()); // You can use other signals inside computed to change the value dynamically
  changeComputedValue(){
    this.x.set(this.x() + 10);
  }


}
