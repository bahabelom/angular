import { from } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router,ParamMap,ActivatedRoute} from'@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2> EMPLOYEE Detail</h2>
  <h2> {{erroMessage}}</h2>
  <ul class="items">
  <li (click)="onSelect(employee)" [class.selected]="isselected(employee)" *ngFor="let employee of employees"  >
    <span class="badge">{{employee.id}}</span> {{employee.name}}
  </li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees=[];
  public erroMessage;
  public selectedid;
  constructor(private _employeeService:EmployeeService,
    private route:ActivatedRoute,
    private router: Router)
  {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id=parseInt(params.get('id'));
      this.selectedid=id;
    })
    this._employeeService.getemployee()
    .subscribe(data=>this.employees=data,
      error=>this.erroMessage=error);
  }
  onSelect(employee){
    this.router.navigate(['/employeedetail',employee.id]);
  }
  isselected(employee)
  {
  return employee.id ===this.selectedid;
  }
}

