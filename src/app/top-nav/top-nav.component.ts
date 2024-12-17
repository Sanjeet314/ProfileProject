import { Component, EventEmitter, Output } from '@angular/core';
import { Alarm, DropdownOption, Notification } from '../utilities/utilities';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../AppStore/app.state';
import * as EmployeeActions from '../AppStore/EmployeeStore/employee.actions';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  @Output() toggleSideNav = new EventEmitter<void>();
  dropdownOptions: DropdownOption [] = [
    {
      label: 'Project Management Team',
      value: 'Project Management Team',
      isSelected: false
    },
    {
      label: 'Development Team',
      value: 'Development Team',
      isSelected: false
    },
    {
      label: 'Design Team',
      value: 'Design Team',
      isSelected: false
    },
    {
      label: 'Business Team',
      value: 'Business Team',
      isSelected: false
    },
    {
      label: 'Data Science Team',
      value: 'Data Science Team',
      isSelected: false
    },
    {
      label: 'HR Team',
      value: 'HR Team',
      isSelected: false
    }
  ]

  notifications$: Observable<Notification<Alarm>[]>;

  constructor(private store: Store<AppState>) {
    // Example data for notifications
    const exampleNotifications: Notification<Alarm>[] = [
      {
        eventType: 'ALARM_TRIGGERED',
        markedRead: false,
        message: 'High severity alarm triggered!',
        data: {
          id: '1',
          severity: 'high',
          timestamp: new Date(),
        },
      },
      {
        eventType: 'ALARM_RESOLVED',
        markedRead: false,
        message: 'Medium severity alarm resolved.',
        data: {
          id: '2',
          severity: 'medium',
          timestamp: new Date(),
        },
      },
    ];
    this.notifications$ = exampleNotifications ? of(exampleNotifications.filter(notification => !notification.markedRead)) : of([]);
  }

  onToggleSideNav() {
    this.toggleSideNav.emit();
  }

  onSelectionChange(selectedValue: string) {
    this.dropdownOptions.forEach(option => {
      option.isSelected = option.value === selectedValue;
    });
    const selectedOption = this.dropdownOptions.find(option => option.isSelected);
    if(selectedOption && selectedOption.value) {
      this.store.dispatch(EmployeeActions.applyFilter({filter: { currentTeam: { name: String(selectedOption.value)}}}));
    }
  }
}
