/**
 * @component DefaultFormsComponent
 * @description
 * The `DefaultFormsComponent` is an Angular standalone component that provides a dynamic form generation
 * based on the provided configuration. It uses reactive forms to handle form controls and their validations.
 * The component is designed to be highly configurable and supports various types of form validators.
 *
 * @selector default-forms
 * @standalone true
 * @imports
 * - ReactiveFormsModule
 * - CommonModule
 * - FormsModule
 * - ValidationMessagesComponent
 * @templateUrl ./default-forms.component.html
 * @styleUrl ./default-forms.component.css
 * @changeDetection ChangeDetectionStrategy.OnPush
 *
 * @input
 * - `formName: string` - The name of the form.
 * - `controls: FormControlConfig[]` - An array of form control configurations.
 *
 * @output
 * - `formSubmit: EventEmitter<Record<string, any>>` - Emits the form value when the form is submitted.
 *
 * @class DefaultFormsComponent
 * @implements OnInit
 *
 * @property {string} formName - The name of the form.
 * @property {FormControlConfig[]} controls - The configuration for the form controls.
 * @property {EventEmitter<Record<string, any>>} formSubmit - Event emitter for form submission.
 * @property {FormGroup} form - The reactive form group instance.
 * @property {BehaviorSubject<boolean>} formChanges$ - A subject to track form changes.
 *
 * @constructor
 * @param {FormBuilder} fb - Angular's FormBuilder service to create form controls.
 * @param {ChangeDetectorRef} cdr - Angular's ChangeDetectorRef service to manually trigger change detection.
 *
 * @method ngOnInit
 * @description Lifecycle hook that is called after the component's view has been initialized. It initializes the form.
 *
 * @method initializeForm
 * @description Initializes the form by creating form controls based on the provided configuration and sets up value change subscriptions.
 *
 * @method getValidators
 * @param {FormControlConfig} control - The configuration for a form control.
 * @returns {ValidatorFn[]} An array of validators for the form control.
 * @description Generates an array of validators based on the provided control configuration.
 *
 * @method updateValidators
 * @param {AbstractControl} control - The form control to update validators for.
 * @param {any} value - The current value of the form control.
 * @description Updates the validators for a form control based on its current value.
 *
 * @method shouldRequireValidation
 * @param {any} value - The value to check for validation requirement.
 * @returns {boolean} Whether the value requires validation.
 * @description Determines if a value should require validation.
 *
 * @method onSubmit
 * @description Handles the form submission. Marks the form as touched and dirty, validates the form, emits the form value if valid, and resets the form.
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from '../validation-messages/validation-messages.component';
import { BaseFormsComponent } from '../base.component';

@Component({
  selector: 'default-forms',
  standalone: true,
  imports: [
    BaseFormsComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ValidationMessagesComponent,
  ],
  templateUrl: './default-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultFormsComponent extends BaseFormsComponent {}
