import { Component, Input } from '@angular/core';
import { Employee } from '../../utilities/utilities';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {

  @Input() employee: Employee | undefined;

  showContacts = false;

  toggleContacts(): void {
    this.showContacts = !this.showContacts;
  }

}
