import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeFilterState } from '../../AppStore/EmployeeStore/employee.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../AppStore/app.state';
import * as EmployeeActions from '../../AppStore/EmployeeStore/employee.actions';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})
export class SearchComponentComponent {
  employeeFilterForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.employeeFilterForm = this.fb.group({
      id: [''],
      name: [''],
      designation: [''],
      experience: [''],
      dateJoined: [''],
      reportingManager: this.fb.group({
        id: [''],
        name: [''],
      }),
      currentTeam: this.fb.group({
        name: [''],
        location: [''],
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData: EmployeeFilterState = this.employeeFilterForm.value;
    this.store.dispatch(EmployeeActions.applyFilter({filter: formData}));
  }
}
