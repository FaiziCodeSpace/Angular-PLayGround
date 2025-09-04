import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count:number=0;
  counterHandle(action:string){
    if(action=="increment"){
      this.count++;
    }else if(action=="decrement"){
      if(this.count>0){
        this.count--;
      }
    }else if(action=="reset"){
      this.count=0;
    }
  }

}
