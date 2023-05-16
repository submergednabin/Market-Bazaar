import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from 'src/app/model/user.model';
import { RegisterService } from '../signup-admin/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  errorMsg: string = '';
  successMsg: string = '';
  users!: User;
  detailUser!: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: RegisterService,
    private router:Router
  ) {
    // this.route.snapshot.paramMap.get('id')
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getUserById(parseInt(id));
      }
    });
  }

  ngOnInit(): void {
    // console.log(this.users)
    this.profileForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street_address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  getUserById(id: number) {
    this.service.getUserById(id).subscribe((user) => {
      this.formData(user);
    });
  }

  formData(users: any) {
    this.users = users;
    this.profileForm.patchValue({
      firstname: this.users.userDetails.firstname,
      middlename: this.users.userDetails.middlename,
      lastname: this.users.userDetails.lastname,
      email: this.users.userDetails.email,
      street_address: this.users.userDetails.street_address,
      city: this.users.userDetails.city,
      country: this.users.userDetails.country,
      state: this.users.userDetails.state,
      zip: this.users.userDetails.zip,
    });
  }

  submitProfile() {
    const userId = this.route.snapshot.paramMap.get('id');
    const data = this.profileForm.value;
    console.log(data);
    this.service.udpateUserProfile(userId, data).subscribe({
      next: (data) => {
        this.successMsg = 'successfully updated';
        setTimeout(() => {
          this.successMsg=""
        }, 4000);
    
        this.router.navigate(['admin/products'], )
        
      },
      error: (err) => (this.errorMsg = err),
    });
  }
}
