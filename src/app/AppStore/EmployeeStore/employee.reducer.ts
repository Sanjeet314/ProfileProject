import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import { initialState, EmployeeFilterState } from './employee.state';

function matchesFilter(employee: any, filter: EmployeeFilterState): boolean {
  return Object.entries(filter).every(([key, filterValue]) => {
    if (!filterValue) return true; 

    const employeeValue = employee[key];
    if (typeof filterValue === 'object') {
      // Handle nested objects like `currentTeam` or `reportingManager`
      return Object.entries(filterValue).every(
        ([nestedKey, nestedValue]) => !nestedValue || employeeValue?.[nestedKey] === nestedValue
      );
    }

    if (key === 'dateJoined' && employeeValue instanceof Date) {
      return employeeValue.getFullYear().toString() === filterValue;
    }

    return employeeValue
      ?.toString()
      .toLowerCase()
      .includes(filterValue.toString().toLowerCase());
  });
}

export const employeeReducer = createReducer(
  initialState,


  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
    filteredEmployees: employees,
    error: null,
  })),

  on(EmployeeActions.loadEmployeesFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(EmployeeActions.applyFilter, (state, { filter }) => {
    const filteredEmployees = state.employees.filter((employee) =>
      matchesFilter(employee, filter)
    );
    return {
      ...state,
      filterCriteria: filter,
      filteredEmployees,
    };
  })
);
