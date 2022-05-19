import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): object{
    return [
      {id: 1, name: "John", age: 22},
      {id: 2, name: "Joe", age: 25},
      {id: 3, name: "Chris", age: 23}
    ]
  }

  constructor() { }
}
