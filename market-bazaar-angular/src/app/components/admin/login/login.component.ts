import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  messages: any;
  error: string="";
  user !:User[];
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.loginService.
    loginAuthenticate(username, password)
    .subscribe({
      next:(auth)=>{
        if(auth){
          this.router.navigate(['products'], {relativeTo:this.route})
        }
      },
      error:(error)=>{
        console.log(error)
        this.error = error
      }
    })
    
  }
}
