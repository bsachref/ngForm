/**
 * @component
 * @name MaterialFormsComponent
 * @description
 * A standalone Angular component that renders a dynamic form using Angular Material components.
 * The form configuration is provided via inputs, and the form submission is handled via an output event.
 * 
 * @selector material-forms
 * @standalone true
 * @imports
 * - CommonModule
 * - ReactiveFormsModule
 * - MatInputModule
 * - MatSelectModule
 * - MatCheckboxModule
 * - MatRadioModule
 * - MatButtonModule
 * - ValidationMessagesComponent
 * - MatDatepickerModule
 * - MatFormFieldModule
 * @providers provideNativeDateAdapter
 * @templateUrl ./material-form.component.html
 * @styleUrl ./material-form.component.css
 * @changeDetection ChangeDetectionStrategy.OnPush
 * 
 * @inputs
 * @property {string} formName - The name of the form.
 * @property {FormControlConfig[]} controls - The configuration for the form controls.
 * 
 * @outputs
 * @property {EventEmitter<Record<string, any>>} formSubmit - Event emitted when the form is submitted.
 * 
 * @class
 * @name MaterialFormsComponent
 * @description
 * This class defines the MaterialFormsComponent which initializes the form based on the provided controls configuration,
 * handles form submission, and provides validation for the form controls.
 * 
 * @constructor
 * @param {FormBuilder} fb - Angular FormBuilder service to create form groups and controls.
 * @param {ChangeDetectorRef} cdr - Angular ChangeDetectorRef service to manually trigger change detection.
 * 
 * @method
 * @name ngOnInit
 * @description
 * Lifecycle hook that is called after the component's view has been initialized. It initializes the form.
 * 
 * @method
 * @name initializeForm
 * @description
 * Initializes the form controls based on the provided configuration. Supports datepicker range controls.
 * 
 * @method
 * @name getValidators
 * @description
 * Returns an array of Angular validators based on the provided control configuration.
 * @param {FormControlConfig} control - The configuration for the form control.
 * @returns {Validators[]} - An array of Angular validators.
 * 
 * @method
 * @name onSubmit
 * @description
 * Handles the form submission. Marks all controls as touched and dirty, updates the form's validity,
 * emits the form values if the form is valid, and resets the form. Triggers change detection.
 */
import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ValidationMessagesComponent } from '../validation-messages/validation-messages.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BaseFormsComponent } from '../base.component';


@Component({
  selector: 'material-forms',
  standalone: true,
  imports: [
    BaseFormsComponent,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    ValidationMessagesComponent,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './material-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialFormsComponent extends BaseFormsComponent {}