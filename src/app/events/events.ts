import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  onEventsTest(event: Event) {
    console.log("Event:", event.type);
    if(event.type == "input"){
      this.onTypeEvent(event);
    }
  }
  onTypeEvent(event: Event) {
    console.log("Event:", (event.target as HTMLInputElement).value);
  }

  name: string = "";
  displayName: string = "";


  onInputChange(event: Event){
    this.name = (event.target as HTMLInputElement).value;
  }
  setValue(){
    this.name = 'Custom Name';
  }
  getValue(){
    this.displayName = this.name;
  }
  displayEmail: String = "";
  // //
  getEmail(val:String){
    // this.displayEmail = val.toString();
    console.log(val);
  }
  setEmail(val:String){
    console.log(val);
    this.displayEmail = "Hello@gmail.com";
  }

}
