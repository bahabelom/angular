import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string ="/assets/data/employee.json";
  constructor(private http:HttpClient) {
  }
  getemployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
               .pipe(catchError(this.handlerError));
  }
  handlerError(error: HttpErrorResponse)
  {
    return Observable.throw(error.message || "Server Error");
  }
}
