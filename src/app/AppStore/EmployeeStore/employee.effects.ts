import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as EmployeeActions from './employee.actions';
import { EmployeeService } from '../../AppService/employee.service';

@Injectable()
export class EmployeeEffects {
  loadEmployees$;
  constructor(private actions$: Actions, private employeeService: EmployeeService) {
    this.loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
          ofType(EmployeeActions.loadEmployees),
          mergeMap(() =>
            this.employeeService.getEmployees().pipe(
              map((employees) => EmployeeActions.loadEmployeesSuccess({ employees })),
              catchError((error) => of(EmployeeActions.loadEmployeesFailure({ error })))
            )
          )
        )
    );
  }

}
