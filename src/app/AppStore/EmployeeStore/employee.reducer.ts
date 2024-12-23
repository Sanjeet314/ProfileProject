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
    console.log(filteredEmployees);
    return {
      ...state,
      filterCriteria: filter,
      filteredEmployees,
    };
  }),

  on(EmployeeActions.addEmployee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
    filteredEmployees: [...state.employees, employee]
  })),

  on(EmployeeActions.updateEmployee, (state, { employee }) => {
    const updatedEmployees = state.employees.map((e) =>
      e.id === employee.id ? { ...employee } : e
    );
    const updatedFilteredEmployees = state.filteredEmployees.map((e) =>
      e.id === employee.id ? { ...employee } : e
    );
  
    return {
      ...state,
      employees: updatedEmployees,
      filteredEmployees: updatedFilteredEmployees,
    };
  }),

  on(EmployeeActions.deleteEmployee, (state, { id }) => {
    const updatedEmployees = state.employees.filter((e) => e.id !== id);
    const updatedFilteredEmployees = state.filteredEmployees.filter((e) => e.id !== id);
  
    return {
      ...state,
      employees: updatedEmployees,
      filteredEmployees: updatedFilteredEmployees,
    };
  }),
);
