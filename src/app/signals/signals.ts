import { Component, effect, signal, WritableSignal } from '@angular/core';

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
}
