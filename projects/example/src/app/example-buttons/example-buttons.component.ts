import { Component } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../../animalia/ui/src/public-api';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [FormsModule, NgIf, JsonPipe, ButtonComponent],
  templateUrl: './example-buttons.component.html',
  styleUrl: './example-buttons.component.scss',
})
export class ExampleButtonsComponent {
  disabled: boolean = false;
  type:
    | 'primary'
    | 'secundary'
    | 'tertiary'
    | 'danger-primary'
    | 'danger-secondary' = 'primary';
  events: string[] = [];

  customCssShow = `
    /* Exemplo de utilização dos tokens */
    .custom-button {
      --font-size: 3rem;
      --font-weight: 700;
      --padding: 1rem;
    }
  `;

  handleClick(): void {
    this.events.push(`${new Date().toISOString()} - Cliked`);
  }
}
