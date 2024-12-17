import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { employeeReducer } from './EmployeeStore/employee.reducer';


export const appReducer: ActionReducerMap<AppState> = {
  employee: employeeReducer
};