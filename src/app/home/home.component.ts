import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../utilities/utilities';
import * as EmployeeActions from '../AppStore/EmployeeStore/employee.actions';
import * as EmployeeSelectors from '../AppStore/EmployeeStore/employee.selectors';
import { AppState } from '../AppStore/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  employees$: Observable<Employee[]>;
  selectedEmployee: Employee | null = null;
  isEditMode: boolean = false;

  constructor(private store: Store<AppState>) {
    this.employees$ = this.store.select(EmployeeSelectors.selectFilteredEmployees);
  }

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.loadEmployees());
  }

  onEditEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    this.isEditMode = true;
  }

  onDeleteEmployee(id: string) {
    this.store.dispatch(EmployeeActions.deleteEmployee({ id }));
  }

  handleFormSubmit(employeeData: Employee) {
    if (this.isEditMode) {
      this.store.dispatch(EmployeeActions.updateEmployee({ employee: { ...employeeData, id: this.selectedEmployee!.id } }));
    } else {
      this.store.dispatch(EmployeeActions.addEmployee({ employee: employeeData }));
    }

    this.selectedEmployee = null;
    this.isEditMode = false;
  }



}
