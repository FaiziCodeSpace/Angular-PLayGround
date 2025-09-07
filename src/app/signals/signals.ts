import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  value: WritableSignal<number | string> = signal(0);
  count= signal<number>(0);
  number: WritableSignal<number> = signal(0);
  constructor(){
    effect(() => {
      console.log('Number changed:', this.number());
    });
  }
  clickHandle(condition:string) {
    if(condition=="increase"){
    this.number.set(this.number()+1);
    }else if(condition=="decrease"){
      this.number()>=1?this.number.set(this.number()-1):null;
    }
  }
  valCall(val: any) {
    this.value.set(val);
  }



}
