import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-employee-list',
  template: `
      <h2> You Select Employee with id =  {{ Departmentid}}</h2>
      <a (click)="goPrevious()">Previous</a>
      <a (click)="goNext()">Next</a>

      <div>
            <button (click)="gotoemployee()"> go to employee</button>
      </div>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees=[];
  public erroMessage;
  public Departmentid;
  constructor(private _employeeService:EmployeeService,
    private route:ActivatedRoute, private router:Router)
  {

  }
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id=parseInt(params.get('id'));
      this.Departmentid=id;
    })
    this._employeeService.getemployee()
    .subscribe(data=>this.employees=data,
      error=>this.erroMessage=error);
  }
  goPrevious(){
    let previousid=this.Departmentid-1;
    this.router.navigate(['/employeedetail',previousid]);
  }
  goNext(){
    let nextid=this.Departmentid+1;
    this.router.navigate(['/employeedetail',nextid]);
  }

  gotoemployee()
  {
     let selectedid=this.Departmentid ? this.Departmentid:null;
     this.router.navigate(['/employeedetail',{id:selectedid}]);

  }
}
