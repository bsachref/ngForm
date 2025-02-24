import { ValidatorFn } from "@angular/forms";


/**
 * Interface representing the configuration for a form control.
 */
export interface FormControlConfig {
  /**
   * The name of the form control.
   */
  name: string;

  /**
   * The type of the form control. Possible values include 'input', 'select', 'textarea', 'checkbox', 'radio', 'file', 'calendar', etc.
   */
  type: string;
 
  /**
   * Options for 'select', 'radio', 'dropdown' controls. Each option can be an object with a label and value or a string.
   */
  options?: Array<{ label: string; value: any } | string>;

  /**
   * Validators for the form control. Includes standard validators like required, minlength, maxlength, pattern, email, and custom validators.
   */
  validators?: {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    pattern?: string;
    email?: boolean;
    custom?: ValidatorFn;
  }[];

  /**
   * CSS classes to be applied to the form control.
   */
  class?: string;

  /**
   * Inline styles to be applied to the form control.
   */
  style?: any;

  /**
   * Default value for the form control.
   */
  value?: any;

  /**
   * UI framework to be used for the form control. Possible values are 'material', 'primeng', 'default'.
   */
  uiFramework?: 'material' | 'primeng' | 'default';

  /**
   * Label for the form control.
   */
  label?: string;

  /**
   * CSS classes to be applied to the label of the form control.
   */
  labelClass?: string;

  /**
   * Inline styles to be applied to the label of the form control.
   */
  labelStyle?: any;

  /**
   * Mode for date picker controls. Possible values are 'single' and 'range'.
   */
  datePickerMode?: 'single' | 'range';

  /**
   * PrimeNG-specific properties for the form control.
   */
  primeng?: {
    icon?: string;
    showClear?: boolean;
    multiple?: boolean;
    maxFileSize?: number;
    accept?: string;
    showWeek?: boolean;
    minDate?: Date;
    maxDate?: Date;
    mode?: 'basic' | 'advanced';
    currency?: string;
    decimalSeparator?: string;
    step?: number;
    range?: boolean;
    scrollHeight?: string;
    showToggleAll?: boolean;
    showButtons?: boolean;
    panelClass?: string;
    chooseLabel?: string;
    clearLabel?: string;
    todayLabel?: string;
    timeOnly?: boolean;
    hourFormat?: string;
    minuteFormat?: string;
    secondsFormat?: string;
    showSeconds?: boolean;
    showMillisec?: boolean;
    timeSeparator?: string;
    showOnFocus?: boolean;
    appendTo?: string;
    inputStyle?: any;
    inputStyleClass?: string;
    uploadLabel?: string;
    cancelLabel?: string;
    auto?: boolean;
    url?: string;
    withCredentials?: boolean;
    customUpload?: string;
    showUploadButton?: boolean;
    showCancelButton?: boolean;
    showUploadIcon?: boolean;
    showRemoveIcon?: boolean;
    showPreview?: boolean;
    previewWidth?: number;
    chooseOptions?: any;
    showTime?: boolean;
    showDate?: boolean;
    showIcon?: boolean;
    iconPos?: 'left' | 'right';
  };

  /**
   * Angular-specific properties for the form control.
   */
  angular?: {
    readonly?: boolean;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    placeholder?: string;
    mask?: string;
    tooltip?: string;
    icon?: string;
    prefix?: string;
    suffix?: string;
    hint?: string;
    tabIndex?: number;
    color?: string;
    theme?: 'dark' | 'light' | string;
  };

  /**
   * Configuration for dependent fields. Specifies fields that depend on the value of this field and the condition for their dependency.
   */
  dependentFields?: {
    dependsOn: string;
    condition: (value: any) => boolean;
  }[];

  /**
   * Indicates if the form control is repeatable.
   */
  repeatable?: boolean;

  /**
   * Function to conditionally render the form control based on the values of other controls.
   */
  conditionalRender?: (values: any) => boolean;

  /**
   * Group to which the form control belongs.
   */
  group?: string;

  /**
   * Event handlers for various events related to the form control.
   */
  events?: {
    onChange?: (event: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    onSelect?: (event: any) => void;
    onUpload?: (event: any) => void;
    onKeyUp?: (event: any) => void;
    onKeyDown?: (event: any) => void;
    onPaste?: (event: any) => void;
    onDownload?: (event: any) => void;
    onClear?: (event: any) => void;
    onReset?: (event: any) => void;
    onToggle?: (event: any) => void;
    onShow?: (event: any) => void;
    onHide?: (event: any) => void;
    onOpen?: (event: any) => void;
    onClose?: (event: any) => void;
    onPanelClick?: (event: any) => void;
    onPanelShow?: (event: any) => void;
    onPanelHide?: (event: any) => void;
    onPanelOpen?: (event: any) => void;
    onPanelClose?: (event: any) => void;
    onPanelToggle?: (event: any) => void;
    onPanelSelect?: (event: any) => void;
    onPanelUnselect?: (event: any) => void;
    onPanelUnselectAll?: (event: any) => void;
    onPanelReorder?: (event: any) => void;
    onPanelResize?: (event: any) => void;
    onPanelDragStart?: (event: any) => void;
    onPanelDragEnd?: (event: any) => void;
    onPanelDragOver?: (event: any) => void;
    onPanelDragLeave?: (event: any) => void;
    onPanelDrop?: (event: any) => void;
    onPanelScroll?: (event: any) => void;
    onPanelFilter?: (event: any) => void;
    onPanelToggleAll?: (event: any) => void;
    onPanelShowAll?: (event: any) => void;
    onPanelHideAll?: (event: any) => void;
    onPanelOpenAll?: (event: any) => void;
    onPanelCloseAll?: (event: any) => void;
    onRemove?: (event: any) => void;
    onError?: (event: any) => void;
    onBeforeUpload?: (event: any) => void;
    onProgress?: (event: any) => void;
    onSlideEnd?: (event: any) => void;
  };
}
