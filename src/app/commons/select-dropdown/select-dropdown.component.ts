import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { DropdownOption } from '../../utilities/utilities';


@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.scss'
})
export class SelectDropdownComponent {
  @Input() options: DropdownOption[] = [];


  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;


    this.options.forEach(option => {
      option.isSelected = option.value === selectedValue;
    });
  }
}
