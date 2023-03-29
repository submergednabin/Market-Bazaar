import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { customValidators } from '../validators';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css'],
})
export class SignupAdminComponent implements OnInit {
  signupAdminForm!: FormGroup;
  error: string = '';
  msg: string = '';
  initialPassword: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: RegisterService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupAdminForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        reTypePassword: ['', [Validators.required]],
      },
      {
        validator: customValidators('password', 'reTypePassword'),
      }
    );
  }
  
  signupForm() {
    this.service.saveRegistration(this.signupAdminForm.value).subscribe({
      next: (register) => {
        const id = parseInt(register);
        this.router.navigate([`/admin/profile/${id}`]);
      },
      error: (error) => {
        // console.log(error.error.text);
        console.error(error.error)
        this.error=error.error;
        this.signupAdminForm.reset();
      },
    });
  }
  // userExists(c:FormControl){
  //   // this.service.findUserExistsorNot(c.value);
  //   this.service.getUser();
  // }
  
}

