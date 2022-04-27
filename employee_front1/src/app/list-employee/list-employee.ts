import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee";
import { EmployeeService } from "../service/employee.service";


@Component({
    selector: 'list-employee',
    templateUrl: './list-employee.html',
    styleUrls: ['./list-employee.css']
  })
export class ListEmployee implements OnInit {

  listEmployee!: Employee[]

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
   this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.listEmployee = data;
    });
  }
}
