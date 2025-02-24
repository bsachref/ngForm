import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControlConfig } from '../formControlConfig';

@Component({
  selector: 'validation-messages',
  standalone: true,
  imports: [],
  templateUrl: './validation-messages.component.html',
})
export class ValidationMessagesComponent {
  @Input() control!: AbstractControl | null; // The form control to validate
  @Input() controlName!: string; // The name of the control (for displaying in messages)
  @Input() config!: FormControlConfig; // The configuration for the control

  getValidatorValue(validatorName: keyof ValidationErrors, key: string): any {
    return this.control?.errors?.[validatorName]?.[key];
  }

  getCustomErrorMessage(): string | null {
    if (this.control?.errors?.['custom']) {
      return this.control.errors['custom'].message ?? 'Invalid input';
    }
    return null;
  }
}
