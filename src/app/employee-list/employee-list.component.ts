import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { relative } from 'path';
import { ActivatedRoute } from '@angular/router';
import { OverviewComponent } from '../overview/overview.component';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  
    public Employees: Employee[] = [
      {"id":1,"name":"Usama","age":13},
      {"id":2,"name":"Usama","age":13},
      {"id":3,"name":"Usama","age":13},
      {"id":4,"name":"Usama","age":13}
    ]
    constructor(private router:Router,private route: ActivatedRoute)
    {

    }
    onSelect(employee:Employee)
    {
      console.log("here")
        this.router.navigate(['/employee',employee.id])
    }
    showOverview()
    {
      console.log("ere")
      this.router.navigate(['overview'],{relativeTo:this.route})
    }
    // constructor(private _service:EmployeeServiceService)
    // {

    // }
    // ngOnInit():void{
    //   this._service.getEmployees().subscribe({
    //    next:(data)=>{
    //     this.Employees= data;
    //    }   
    //   });
    // }
}
