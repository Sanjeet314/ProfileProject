import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Team, Employee, Teams } from '../utilities/utilities';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrl: './add-employee-form.component.scss'
})
export class AddEmployeeFormComponent {
  @Input() employeeToEdit: Employee | null = null;
  @Input() isEditMode: boolean = false;
  @Output() formSubmit = new EventEmitter<Employee>();

  teams: Team[] = []

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.teams = Teams.map((team, index) => ({
      id: (index + 1).toString(),
      name: team.label,
      location: 'HQ',
      emplist: [],
    }));
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeToEdit'] && this.employeeToEdit) {
      this.populateForm(this.employeeToEdit);
    }
  }

  initializeForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      profilePhoto: ['', Validators.required],
      designation: ['', Validators.required],
      experience: [0, Validators.required],
      dateJoined: ['', Validators.required],
      currentTeam: [null, Validators.required],
      reportingManager: [null],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      companyMailAdd: ['', [Validators.required, Validators.email]],
      contactList: [[]],
    });
  }

  populateForm(employee: Employee): void {
    this.employeeForm.patchValue({ ...employee });
  }

  onSubmit(): void {
    const employeeData: Employee = {
      ...this.employeeForm.value,
      id: this.employeeToEdit?.id || this.generateUniqueId(),
    };
    this.formSubmit.emit(employeeData);
    this.employeeForm.reset();
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}