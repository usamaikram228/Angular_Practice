import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeServiceService } from '../employee-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public EmployeesDetails:Employee[] = [];
  constructor(private _service:EmployeeServiceService){}


  // ngOnInit(): void {
  //   this._service.getEmployees().subscribe({
  //     next: (data) => {
  //       this.EmployeesDetails = data; 
  //     }
  //   });
  // }
}
