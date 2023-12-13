import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ani-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent {
  @Input() type:
    | 'primary'
    | 'secundary'
    | 'tertiary'
    | 'danger-primary'
    | 'danger-secondary' = 'primary';

  @Input() disabled: boolean = false;

  @Output('a-click') click = new EventEmitter();

  handleClick(): void {
    this.click.emit();
  }
}
