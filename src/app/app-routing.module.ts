import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentComponent } from './department/department.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: '', redirectTo :'/employeedetail',  pathMatch:'full' },
  {path: 'employeedetail', component :EmployeeDetailComponent },
  {path: 'employeedetail/:id', component :EmployeeListComponent },
  {path: 'employeelist', component :EmployeeListComponent },
  {path: '**', component :PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeDetailComponent,
                                PageNotFoundComponent,
                                EmployeeListComponent];
