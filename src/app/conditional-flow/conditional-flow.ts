import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-flow',
  imports: [],
  templateUrl: './conditional-flow.html',
  styleUrl: './conditional-flow.css'
})
export class ConditionalFlow {
color='red';
handleClick(color: string){
  this.color = color;
}
handleInput(event: any){
  this.color = (event.target as HTMLInputElement).value;
}
}
