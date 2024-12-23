import { Component, EventEmitter, Output } from '@angular/core';
import { Alarm, DropdownOption, Notification, Teams } from '../utilities/utilities';
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
  dropdownOptions: DropdownOption [] = Teams;

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
    } else {
        this.store.dispatch(EmployeeActions.applyFilter({filter: {}}));
    }
  }
}
