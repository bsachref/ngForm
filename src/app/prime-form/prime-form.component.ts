/**
 * PrimeNgFormsComponent is a standalone Angular component that dynamically generates
 * a form based on the provided configuration. It leverages PrimeNG UI components
 * and Angular Reactive Forms for form creation and validation.
 *
 * @selector primeng-forms
 * @standalone true
 * @imports [
 *   CommonModule,
 *   FormsModule,
 *   ReactiveFormsModule,
 *   ValidationMessagesComponent,
 *   InputTextModule,
 *   MultiSelectModule,
 *   TextareaModule,
 *   CheckboxModule,
 *   RadioButtonModule,
 *   DatePickerModule,
 *   ToggleButtonModule,
 *   FileUploadModule,
 *   SliderModule,
 *   ButtonModule,
 *   SelectModule,
 *   FileUploadValueAccessor
 * ]
 * @templateUrl ./prime-form.component.html
 * @styleUrl ./prime-form.component.css
 * @changeDetection ChangeDetectionStrategy.OnPush
 *
 * @property {string} formName - The name of the form.
 * @property {FormControlConfig[]} controls - The configuration for the form controls.
 * @property {EventEmitter<Record<string, any>>} formSubmit - Event emitter for form submission.
 * @property {FormGroup} form - The reactive form group.
 * @property {BehaviorSubject<boolean>} formChanges$ - Observable to track form changes.
 *
 * @constructor
 * @param {FormBuilder} fb - FormBuilder service to create form controls.
 * @param {ChangeDetectorRef} cdr - ChangeDetectorRef to manually trigger change detection.
 *
 * @method ngOnInit - Lifecycle hook that initializes the form.
 * @method initializeForm - Initializes the form controls and sets up value change subscriptions.
 * @method getValidators - Returns an array of validators for a given form control configuration.
 * @param {FormControlConfig} control - The configuration for a form control.
 * @returns {ValidatorFn[]} - An array of validator functions.
 * @method updateValidators - Updates the validators for a form control based on its value.
 * @param {AbstractControl} control - The form control to update.
 * @param {any} value - The current value of the form control.
 * @method shouldRequireValidation - Determines if a form control should require validation.
 * @param {any} value - The current value of the form control.
 * @returns {boolean} - True if validation is required, false otherwise.
 * @method onFileSelect - Handles file selection for file upload controls.
 * @param {any} event - The file selection event.
 * @param {string} controlName - The name of the form control.
 * @method onSubmit - Handles form submission, validates the form, and emits the form value.
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from '../validation-messages/validation-messages.component';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FileUploadModule } from 'primeng/fileupload';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { BaseFormsComponent } from '../base.component';

@Component({
  selector: 'primeng-forms',
  standalone: true,
  imports: [
    BaseFormsComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationMessagesComponent,
    InputTextModule,
    MultiSelectModule,
    TextareaModule,
    CheckboxModule,
    RadioButtonModule,
    DatePickerModule,
    ToggleButtonModule,
    FileUploadModule,
    SliderModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './prime-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimeNgFormsComponent extends BaseFormsComponent {
  onFileSelect(event: any, controlName: string) {
    const file = event.files[0];
    if (file) {
      this.form.get(controlName)?.setValue(file);
      this.form.get(controlName)?.updateValueAndValidity();

      const controlConfig = this.controls().find(
        (control) => control.name === controlName
      );
      if (controlConfig?.events?.onUpload) {
        controlConfig.events.onUpload(event);
      }
    }
  }
}
