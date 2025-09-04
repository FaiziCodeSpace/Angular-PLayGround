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
}
