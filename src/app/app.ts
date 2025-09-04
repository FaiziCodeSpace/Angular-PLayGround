import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from './title/title';
import { Paragraph } from './paragraph/paragraph';
import { Counter } from './counter/counter';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, Paragraph, Counter, Events],
  templateUrl: './app.html',
  styleUrl: './app.css'  
})
export class App {
  protected readonly title = signal('angular-app');
  Title = "How are we Suppose to make it work?!";
  Peter = "Peter's Accordion Item";
  Paul = "Paul's Accordion Item";
  
  handleFunction(){
    alert("Button Clicked!");
    this.handleFunction2()
  }
  handleFunction2(){
    console.log('yo');
  }
  // TYPES
  name:string = "Angular Developer";
  age:number = 25;
  isActive:boolean = true;
  skills:string[] = ["Angular", "TypeScript", "JavaScript"];
  experienceInYears:number = 5;
  object:{ [key: string]: any } = {
    name: "Angular Developer",
    age: 25,
    isActive: true,
    skills: ["Angular", "TypeScript", "JavaScript"],
    experienceInYears: 5
  };
  allTypes:any="Any Type";
  MultipleTypes: string = 'Faizan'+ 22;
  y:number=10;
  Print(){
    let x:number=22;
    console.log(x+this.y);
    console.log(this.MultipleTypes);
    console.log(this.allTypes);

  }


}
