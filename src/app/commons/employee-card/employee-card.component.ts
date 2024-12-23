import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../utilities/utilities';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {

  @Input() employee: Employee | undefined;
  @Output() edit = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<string>();

  showContacts = false;

  toggleContacts(): void {
    this.showContacts = !this.showContacts;
  }

  onEdit() {
    this.edit.emit(this.employee);
  }

  onDelete() {
    this.delete.emit(this.employee?.id);
  }
}
