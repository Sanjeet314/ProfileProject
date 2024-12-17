import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.state';

// Feature selector
export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

// Select all employees
export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state) => state.employees
);

// Select filtered employees
export const selectFilteredEmployees = createSelector(
  selectEmployeeState,
  (state) => state.filteredEmployees
);

// Select current filter criteria
export const selectFilterCriteria = createSelector(
  selectEmployeeState,
  (state) => state.filterCriteria
);