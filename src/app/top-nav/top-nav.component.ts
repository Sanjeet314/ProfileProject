import { Component, EventEmitter, Output } from '@angular/core';
import { Alarm, DropdownOption, Notification } from '../utilities/utilities';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  @Output() toggleSideNav = new EventEmitter<void>();
  dropdownOptions: DropdownOption[] = [
    { label: 'Option 1', value: 1, isSelected: false },
    { label: 'Option 2', value: 2, isSelected: false },
    { label: 'Option 3', value: 3, isSelected: false },
  ];

  notifications$: Observable<Notification<Alarm>[]>;

  constructor() {
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

  onSignOut() {
    // Handle user sign-out logic here
    console.log('User signed out');
  }
}
