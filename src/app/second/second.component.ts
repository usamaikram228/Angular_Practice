import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Input('parentData') public name="";
  @Output () public childEvent = new EventEmitter();
  public array=[1,2,"abc"];
  public greeting = "";
  public display = false;
  public onclickFunction(event:Event){
    this.greeting= `Welcome to ${event.type}`;
  }
  public onclick(value:string)
  {
    this.greeting= value;
  }
  public onclickDisplay()
  {
    this.display = true;
  }
  public fireEvent()
  {
    this.childEvent.emit("Data is coming from Child to parent");
  }
}
