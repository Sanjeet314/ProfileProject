import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../utilities/utilities';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private jsonUrl = 'db.json';

  constructor(private http: HttpClient) {}

  // Method to fetch JSON data
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.jsonUrl);
  }
}
