import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { text } from 'stream/consumers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  public name = "Usama";
  public employee_id:number = 0;
  // public myId = 12
  public isSuccess = true;
  public isDanger = false;
  public isSpecial = true;
  public messageClass ={
    "text-success":this.isSuccess,
    "text-danger":this.isDanger,
    "text-special":!this.isSpecial
  }
  public styleClass={
    "color":'orange',
    "font-size":'20px'
  }
  constructor(private route:ActivatedRoute){}
  getName()
  {
    return "Hello" + this.name;
  }
  ngOnInit()
  {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null)
      {
        this.employee_id = parseInt(id,10);
      }
  }
}
