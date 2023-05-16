import { Component, Input, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'app-reuseable-form',
  templateUrl: './reuseable-form.component.html',
  styleUrls: ['./reuseable-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReuseableFormComponent),
      multi: true,
    },
  ],
})
export class ReuseableFormComponent implements ControlValueAccessor {
  public value !:string;
  public changed !: (value: string) => void;
  public touched !: () => void;
  public isDisabled !:boolean;

  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() type = '';
  @Input() acceptData = '';
  @Input() multipleFile = false;
  // @Input() functionName !:any;
  errorMessage: Record<string, string> = {
    required: 'This field is required',
    fileType:'Unsupported image format'
    // mime: "Unsupported Format !!! "
  };

  constructor() {}
  writeValue(value:string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
