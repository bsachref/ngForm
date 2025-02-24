import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';

@Directive({
  standalone: true,
  selector: 'p-fileUpload[formControlName], p-fileUpload[formControl], p-fileUpload[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadValueAccessor),
      multi: true,
    },
  ],
})
export class FileUploadValueAccessor implements ControlValueAccessor {
  constructor(private host: FileUpload) {}

  writeValue(value: any): void {
    if (value) {
      this.host.files = value;
    } else {
      this.host.clear();
    }
  }

  registerOnChange(fn: any): void {
    this.host.onUpload.subscribe((event: any) => {
      fn(event.files);
    });
  }

  registerOnTouched(fn: any): void {
    // this.host.onBlur.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.host.disabled = isDisabled;
  }
}