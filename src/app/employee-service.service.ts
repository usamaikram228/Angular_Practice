import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Employee } from './employee.model';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url= "http://localhost:3000/submi";
  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employee[]>
  {
      return this.http.get<Employee[]>(this._url);
  }
  enroll(user:User):Observable<any>
  {
    console.log("Usama Ikram in service")
    return  this.http.post<any>(this._url,user).pipe(
      tap({
        
        error: e => console.log(e)
      }),
    );
  }
}
