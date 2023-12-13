import { Component, Input, forwardRef } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { SelectOptionInterface } from './select-option.interface';

@Component({
  selector: 'ani-select',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input()
  label: string = 'Label';

  @Input()
  placeholder: string = 'Selecione uma opção';

  @Input()
  helpText!: string;

  @Input()
  errorText: string = 'Selecione uma opção';

  @Input()
  required: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  options!: SelectOptionInterface[];

  @Input()
  id: string = crypto.randomUUID();

  protected itemSelected: string | null = null;
  protected onChange: any = (value: any) => {};
  protected onTouched: any = () => {};

  // #region implment ControlValueAccessor

  writeValue(value: any): void {
    if (!value) {
      this.itemSelected = null;
      return;
    }

    this.itemSelected = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  //#endregion

  onSelectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value) {
      this.itemSelected = value;
      this.onChange(value);
    }
  }
}
