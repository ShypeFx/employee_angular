import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "../model/employee";
import { Poste } from "../model/poste";
import { EmployeeService } from "../service/employee.service";



@Component({
    selector: 'update-employee',
    templateUrl: './update-employee.html',
    styleUrls: ['./update-employee.css']
  })
export class UpdateEmployee implements OnInit{

    employee!: Employee;
    id!: number;
    listPoste: Poste[] = [
      { id: 1, name: 'Stagiaire'},
      { id: 2, name: 'Directeur'},
      { id: 3, name: 'Scrum Master'},
      { id: 4, name: 'Technicien'},
      { id: 5, name: 'Tech Lead'},
      { id: 6, name: 'Sales Manager'},
      { id: 7, name: ''}
    ];

    constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getOneEmployee(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
    }

    updateEmployee(){
        this.employeeService.updateEmployee(this.id,this.employee).subscribe( data =>{
          console.log(data);
          this.goToEmployeeList();
        },
        error => console.log(error));
    }
    
    onSubmit(){
      this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
    }





    goToEmployeeList(){
      this.router.navigate(['/employees']);
  }

}
