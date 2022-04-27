import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../model/employee";
import { Poste } from "../model/poste";
import { EmployeeService } from "../service/employee.service";

@Component({
    selector: 'create-employee',
    templateUrl: './create-employee.html',
    styleUrls: ['./create-employee.css']
  })
export class CreateEmployee implements OnInit{


    employee: Employee = new Employee();
    listPoste: Poste[] = [
      { id: 1, name: 'Stagiaire'},
      { id: 2, name: 'Directeur'},
      { id: 3, name: 'Scrum Master'},
      { id: 4, name: 'Technicien'},
      { id: 5, name: 'Tech Lead'},
      { id: 6, name: 'Sales Manager'},
      { id: 7, name: ''}
    ];
    

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
