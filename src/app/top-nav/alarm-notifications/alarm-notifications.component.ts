import { Component, Input } from '@angular/core';
import { Alarm, Notification } from '../../utilities/utilities';

@Component({
  selector: 'app-alarm-notifications',
  templateUrl: './alarm-notifications.component.html',
  styleUrl: './alarm-notifications.component.scss'
})
export class AlarmNotificationsComponent {

  @Input() notifications!: Notification<Alarm>[] | null;

}
