import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cores-dropdown-field',
  templateUrl: './dropdown-field.component.html',
})
export class DropdownFieldComponent {
  @Input() placeholder?: string;
  @Input() class: string[] | string = [];
  @Input() defaultValue: string = '';
  @Input() type?: string;
  @Input() onChange?: (value: string) => void;

  onChangeValue(event: any) {
    if (!this.onChange) return
    const value = event.target.value;
    if (value) {
      this.onChange(value)
    }
  }
}
