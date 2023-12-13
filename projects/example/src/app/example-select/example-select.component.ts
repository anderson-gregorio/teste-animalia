import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  SelectComponent,
  SelectOptionInterface,
} from '../../../../animalia/ui/src/public-api';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, SelectComponent],
  templateUrl: './example-select.component.html',
  styleUrl: './example-select.component.scss',
})
export class ExampleSelectComponent implements OnInit {
  selectOptionList: SelectOptionInterface[] = [
    { value: '1', label: 'Opção inválida (p/ visualizar estado de erro)' },
    { value: '10', label: 'Opção 1' },
    { value: '20', label: 'Opção 2' },
  ];

  label: string = 'Label';

  placeholder: string = 'Selecione uma opção';

  helpText: string = 'Mensagem de ajuda!';

  errorText: string = 'Você precisa selecionar uma opção';

  required: boolean = false;

  disabled: boolean = false;

  forceError: boolean = false;

  selectedItem!: string;

  customCssShow = `
    /* Exemplo de utilização dos tokens */
    .custom-button {
      --font-size: 1.2rem;
      --padding: 1rem;
      --select-danger: #cc00d7;
    }
  `;

  form!: FormGroup;
  formCustom!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._createForm();
    this.formCustom = this._createForm();

    this.formCustom.patchValue({
      selectedItem: '1',
    });
    this.formCustom.get('selectedItem')?.markAsDirty();
  }

  private _createForm() {
    return this.formBuilder.group({
      selectedItem: [null, [Validators.required, Validators.minLength(2)]],
    });
  }
}
