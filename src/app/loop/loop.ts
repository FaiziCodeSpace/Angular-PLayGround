import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.html',
  styleUrl: './loop.css'
})
export class Loop {
  profiles: any[] = [
    {name: "Faizan", age:22, email:"faizanwebdev1@gmail.com"},
    {name: "John", age:25, email:"john.doe@example.com"},
    {name: "Jane", age:28, email:"jane.smith@example.com"}
  ]
id: any;
  handleButtonClick(profile: any){
    console.log(profile);
  }
}
