import { FormGroup } from "@angular/forms";

export function customValidators(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ customValidators: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}