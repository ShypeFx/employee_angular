import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { EmployeeService } from "../service/employee.service";

@Component({
    selector: 'delete-employee',
    templateUrl: './delete-employee.html',
    styleUrls: ['./delete-employee.css']
  })
export class DeleteEmployee implements OnInit {

    id!: number;

    constructor(private employeeService:EmployeeService, private route: ActivatedRoute, private router: Router){}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.deleteEmployee();
    }

    deleteEmployee(){
        this.employeeService.deleteEmployee(this.id).subscribe( data => {
            console.log(data);
          });
    }

    getEmployees(){
        this.router.navigate(['/employees']);
      }

}
