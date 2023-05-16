import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function customValidators(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ customValidators: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function mimeValidators(value: string[]): ValidatorFn {
  // export function mimeValidators(fileType:string[]){
  return (c: AbstractControl): ValidationErrors | null => {
    var invalidState: boolean = true;
    const file = c.value;
    console.log('File: ', file);
    var path: string = '';
    if (file) {
      path = file.replace(/^.*[\\\/]/, '');
    }
    console.log('path: ', path);
    var splitString: string[] = path.split('.');
    const strLen = splitString.length;
    /**
     * Finding the extension from the files
     * as extension is at last index of our array
     */
    var extension = splitString[strLen - 1].toLocaleUpperCase();
    console.log('extension uppercase : ', extension.toLocaleUpperCase());
    const len = value.length;
    console.log(len);
    for (var i = 0; i < len; i++) {
      var imageType = value[i].toUpperCase();
      if (imageType === extension) {
        invalidState = false;
      }
    }
    if (invalidState === true) {
    //   console.log('Unsupported file');
      return {
        fileType: false,
      };
    }
    if (invalidState === false) {
    //   console.log('valid file match');
      return null;
      // return {
      //     hasMimeError:false,
      //     fileType:""
      // }
    }
    return null;
  };
}
