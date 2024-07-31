import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from './user';
import { EmployeeServiceService } from './employee-service.service';
import { Console, error } from 'console';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validator } from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterOutlet, FirstComponent,SecondComponent,EmployeeListComponent,EmployeeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(private _service:EmployeeServiceService){}
  constructor(private fb: FormBuilder){}
  public topics:string[]=[
    'React',"Angular","Vue"
  ]
  userModel = new User();
  title = 'MyProject';
  // onSubmit()
  // {
  //   console.log(this.userModel);
  //   this._service.enroll(this.userModel).subscribe(
  //   data=> console.log("Success",data),
  //   error=>console.log('error',error)      
  // )
  //  }
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Usama'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address:new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // })
  // public message ="";
  // public name :string= "Data sent from parent component to child component";

  //Now i will use formBuilder
  // registrationForm = this.fb.group({
  //   userName:['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator]],
  //   email:[''],
  //   subscribe:[false],
  //   password:[''],
  //   confirmPassword:[''],
  //   address : this.fb.group({
  //     city:[''],
  //     state:[''],
  //     postalCode:['']
  //   })
  // },{validators:PasswordValidator} as FormControlOptions)
  registrationForm!:FormGroup;
  ngOnInit()
  {
    this.registrationForm = this.fb.group({
        userName:['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator]],
        email:[''],
        subscribe:[false],
        password:[''],
        confirmPassword:[''],
        address : this.fb.group({
          city:[''],
          state:[''],
          postalCode:['']
        })
      },{validators:PasswordValidator} as FormControlOptions)
  }

}
