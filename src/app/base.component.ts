import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  output,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  ValidatorFn,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { FormControlConfig } from '../public-api';

@Component({
  selector: 'base-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationMessagesComponent,
  ],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseFormsComponent {
  formName = input.required<string>();
  controls = input.required<FormControlConfig[]>();
  formSubmit = output<Record<string, any>>();

  form!: FormGroup;
  protected formChanges$ = new BehaviorSubject<boolean>(false);

  constructor(
    protected fb: FormBuilder,
    protected cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  protected initializeForm(): void {
    const formControls: { [key: string]: any } = {};

    this.controls().forEach((control) => {
      formControls[control.name] = [
        control.value ?? '',
        this.getValidators(control),
      ];
    });

    this.form = this.fb.group(formControls);

    this.controls().forEach((control) => {
      const formControl = this.form.get(control.name);
      if (formControl) {
        formControl.valueChanges.subscribe((value) => {
          // Only update validators if the value actually changes
          if (formControl.value !== value) {
            this.updateValidators(formControl, value);
          }
        });
      }
    });

    this.formChanges$.subscribe(() => this.cdr.markForCheck());
  }

  protected getValidators(control: FormControlConfig): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (control.validators) {
      control.validators.forEach((validator) => {
        if (validator.required) validators.push(Validators.required);
        if (validator.minlength)
          validators.push(Validators.minLength(validator.minlength));
        if (validator.maxlength)
          validators.push(Validators.maxLength(validator.maxlength));
        if (validator.pattern)
          validators.push(Validators.pattern(validator.pattern));
        if (validator.email) validators.push(Validators.email);
        if (validator.custom) validators.push(validator.custom);
      });
    }

    return validators;
  }

  protected updateValidators(control: AbstractControl, value: any): void {
    const requiresValidation = this.shouldRequireValidation(value);

    // Check if the validators need to be updated
    const hasRequiredValidator = control.hasValidator(Validators.required);

    if (requiresValidation && !hasRequiredValidator) {
      control.addValidators(Validators.required);
      control.updateValueAndValidity();
    } else if (!requiresValidation && hasRequiredValidator) {
      control.removeValidators(Validators.required);
      control.updateValueAndValidity();
    }

    this.formChanges$.next(true);
  }

  protected shouldRequireValidation(value: any): boolean {
    return value !== null && value !== '';
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    this.form.markAsDirty();
    this.form.updateValueAndValidity();

    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
      this.form.reset();
    } else {
      console.error('Form Invalid');
    }

    this.formChanges$.next(true);
  }
}