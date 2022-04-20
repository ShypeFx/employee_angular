import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../model/employee";
import { EmployeeService } from "../service/employee.service";

@Component({
    selector: 'create-employee',
    templateUrl: './create-employee.html',
    styleUrls: ['./create-employee.css']
  })
export class CreateEmployee implements OnInit{


    employee: Employee = new Employee();
    

    constructor(private employeeService:EmployeeService, private route: Router){}

    ngOnInit(): void {
    }
  
    saveEmployee(){
      this.employeeService.createEmployee(this.employee).subscribe( data =>{
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error));
    }
  
    goToEmployeeList(){
      this.route.navigate(['/employees']);
    }
    
    onSubmit(){
      console.log(this.employee);
      this.saveEmployee();
    }
}
