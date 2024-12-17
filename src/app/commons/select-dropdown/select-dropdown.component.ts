import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOption } from '../../utilities/utilities';


@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.scss'
})
export class SelectDropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Output() selectionChange = new EventEmitter<string>();

  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(selectedValue);
  }
}
