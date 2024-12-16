import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../AppService/employee.service';
import { Employee } from '../utilities/utilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

}
