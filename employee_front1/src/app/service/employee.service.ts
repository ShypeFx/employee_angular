import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1";
  
  constructor(private httpClient: HttpClient) {}


  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  getOneEmployee(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/employees/${ id }`)
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create`, employee)
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${ id }`, employee);
  }


}
