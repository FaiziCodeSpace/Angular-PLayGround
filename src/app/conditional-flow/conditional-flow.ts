import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-flow',
  imports: [],
  templateUrl: './conditional-flow.html',
  styleUrl: './conditional-flow.css'
})
export class ConditionalFlow {
color='red';
color2='red';
handleClickif(col: any){
  this.color = col;
}
handleClick(col: any){
  this.color2 = col;
}
handleInput(event: any){
  this.color2 = (event.target as HTMLInputElement).value.toUpperCase();
}
}
