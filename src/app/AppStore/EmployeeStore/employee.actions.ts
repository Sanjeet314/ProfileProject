import { createAction, props } from '@ngrx/store';
import { Employee } from '../../utilities/utilities';
import { EmployeeFilterState } from './employee.state';

const EMPLOYEE_ACTIONS = {
  LOAD_EMPLOYEES: '[Employee] Load Employees',
  LOAD_EMPLOYEES_SUCCESS: '[Employee] Load Employees Success',
  LOAD_EMPLOYEES_FAILURE: '[Employee] Load Employees Failure',
  APPLY_FILTER: '[Employee] Apply Filter',
};

export const loadEmployees = createAction(EMPLOYEE_ACTIONS.LOAD_EMPLOYEES);

export const loadEmployeesSuccess = createAction(
  EMPLOYEE_ACTIONS.LOAD_EMPLOYEES_SUCCESS,
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  EMPLOYEE_ACTIONS.LOAD_EMPLOYEES_FAILURE,
  props<{ error: any }>()
);

export const applyFilter = createAction(
  EMPLOYEE_ACTIONS.APPLY_FILTER,
  props<{ filter: EmployeeFilterState }>()
);
