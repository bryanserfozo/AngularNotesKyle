import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-names',
  templateUrl: './employee-names.component.html',
  styleUrls: ['./employee-names.component.css']
})
export class EmployeeNamesComponent implements OnInit {

  // public employee = [
  //   {id: 1, name: "John", age: 22},
  //   {id: 2, name: "Joseph", age: 25},
  //   {id: 3, name: "Chris", age: 23}
  // ]

  public employee:any = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
  }

}
