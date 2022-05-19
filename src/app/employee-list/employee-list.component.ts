import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // public employee = [
  //   {id: 1, name: "John", age: 22},
  //   {id: 2, name: "Joseph", age: 25},
  //   {id: 3, name: "Chris", age: 23}
  // ]

  public employee:any = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
  }

}
