import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../AppStore/app.state';
import * as EmployeeActions from '../AppStore/EmployeeStore/employee.actions';
import * as EmployeeSelectors from '../AppStore/EmployeeStore/employee.selectors';
import { Employee } from '../utilities/utilities';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  employees$: Observable<Employee[]>;

  constructor(private store: Store<AppState>) {
    this.employees$ = this.store.select(EmployeeSelectors.selectFilteredEmployees);
  }

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.applyFilter({filter: {}}));
  }
}
