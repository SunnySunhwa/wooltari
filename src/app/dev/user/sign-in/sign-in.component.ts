import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Token {
  token: string;
}

@Component({
  selector: 'app-sign-in',
  template: `
    <h1>Sign in</h1>
    <div class="container">
      <div class="row profile">
        <h2>WOOLTARI</h2>
        <div class="logo">
          <div> logo img </div>
          <img class="logo-image" src="" alt="Wooltari's logo">
        </div>
      </div>

      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate>
        <div class="row box-container">
          <div class="box-center">
            <div class="right-side">
              <div class="elem">
                <div class="elem-conts">
                  <span class="sign-up-link"><a href="#">Sign Up</a></span>
                  <span class="sign-in-link"><a href="#">Sign In</a></span>
                </div>
              </div>
            </div>

            <div class="elem">
              <div class="elem-conts">
                <div class="input-email">
                  <input type="email" name="useremail" class="form-control" formControlName="userEmail" placeholder="iLovePets@example.com">
                  <em *ngIf="userEmail.errors?.required && userEmail.touched" class="">
                    Enter your email!
                  </em>
                </div>
              </div>
            </div>

            <div class="elem">
              <div class="elem-conts">
                <div class="input-password">
                  <input
                    type="password"
                    name="newpassword"
                    class="form-control"
                    formControlName="password"
                    placeholder="Enter New Password"
                  >
                  <em *ngIf="password.errors?.required && password.touched" class="">
                    Enter your New Password!
                  </em>
                </div>
              </div>
            </div>

            <div class="elem">
              <div class="remember-me">
                <input type="checkbox" class="remember-me-checkbox">
                <span>Remeber me</span>
              </div>
            </div>

            <div class="facebook-sign-in">Facebook sign in</div>
            <div class="google-sign-in">Google sign in</div>
          </div>
        </div>

        <div class="row box-footer">
          <div class="btn-set-wrapper">
            <button type="submit" class="btn btn-type1 bg-orange" [disabled]="userForm.invalid">Submit</button>
            <button class="btn btn-type1 bg-grey">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['../user-style.scss']
})
export class SignInComponent implements OnInit {
  userForm: FormGroup;
  appUrl = environment.appUrl;

  constructor( @Inject(FormBuilder) private fb: FormBuilder,
              @Inject(HttpClient) private http: HttpClient,
              @Inject(Router) private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get userEmail() {
    return this.userForm.get('userEmail');
  }
  get password() {
    return this.userForm.get('password');
  }

  onSubmit() {
    const loginForm = {
      email: this.userEmail.value,
      password: this.password.value
    };
    if (this.userForm.status === 'VALID') {
      this.http.post(`${this.appUrl}/auth/login/`, loginForm)
        // request id, password token == token
        .subscribe(res => {
          console.log(res);
          console.log('로그인 성공!');
          this.router.navigate(['']);
          return false;
        });
    } else {
      console.log('invalid token');
    }
  }
}
