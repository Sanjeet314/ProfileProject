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

  constructor(private store: Store<AppState>) {
    this.employees$ = this.store.select(EmployeeSelectors.selectAllEmployees);
  }

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.loadEmployees());
  }




}
