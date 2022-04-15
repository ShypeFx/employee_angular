import { Component, OnInit } from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import { Employee } from "../model/employee";
import { EmployeeService } from "../service/employee.service";

@Component({
    selector: 'details-employee',
    templateUrl: './details-employee.html',
    styleUrls: ['./details-employee.css']
})
export class DetailsEmployee implements OnInit {

    id!: number;
    employee!: Employee;

    constructor(private route: ActivatedRoute,private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.getEmployee(this.id);
    }

    private getEmployee(id: number) {
        this.employeeService.getOneEmployee(id).subscribe(data =>{
            this.employee = data;
        })
    }

    onClickF(){
        console.log("click effectué")
    }

}
