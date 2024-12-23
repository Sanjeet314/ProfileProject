import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Team, Employee, Teams } from '../utilities/utilities';
import * as EmployeeActions from '../AppStore/EmployeeStore/employee.actions';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrl: './add-employee-form.component.scss'
})
export class AddEmployeeFormComponent {
  employeeForm!: FormGroup;
  teams: Team[] = [];

  @Input() employeeToEdit: Employee | null = null;
  @Input() isEditMode: boolean = false;
  @Output() formSubmit = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.teams = Teams.map((team, index) => ({
      id: (index + 1).toString(),
      name: team.label,
      location: 'HQ',
      emplist: [],
    }));
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      experience: [0, [Validators.required, Validators.min(0)]],
      dateJoined: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      companyMailAdd: ['', [Validators.required, Validators.email]],
      currentTeam: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeToEdit'] && this.employeeToEdit) {
      this.employeeForm.patchValue(this.employeeToEdit);
    }
  }

  onSubmit() {
    this.formSubmit.emit(this.employeeForm.value);
    this.employeeForm.reset();
  }
}
