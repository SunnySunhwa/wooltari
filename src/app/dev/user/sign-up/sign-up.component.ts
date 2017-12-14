import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-sign-up',
  template: `
    <h1>Sign up</h1>
    <div class="container">
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate>

        <div class="row profile">
          <!-- 유저네임 입력창 -->
          <h2>user name</h2>
          <div class="thumb">
            <div> Thumb img </div>
            <input type="text" name="username" class="form-control" formControlName="userName" placeholer="Write your name">
            <em *ngIf="userName.errors?.required && userName.touched" class="">
              Enter your name!
            </em>
            <i class="icon-edit">icon</i>
          </div>
        </div>

        <div class="row box-container">
          <div class="box-center">
            <!-- 회원가입, 로그인 변경창 -->
            <div class="right-side">
              <div class="elem">
                <div class="elem-conts">
                  <span class="sign-up-link"><a href="#">Sign Up</a></span>
                  <span class="sign-in-link"><a href="#">Sign In</a></span>
                </div>
              </div>
            </div>
            <!-- 유저 이메일 입력창 -->
            <div class="elem">
              <h4 class="elem-title">User Email</h4>
              <div class="elem-conts">
                <div class="input-email">
                  <input type="email" name="useremail" class="form-control" formControlName="userEmail" placeholder="iLovePets@example.com">
                  <em *ngIf="userEmail.errors?.required && userEmail.touched" class="">
                    Enter your email!
                  </em>
                  <em *ngIf="userEmail.errors?.pattern && userEmail.touched" class="">
                    Right email please.
                  </em>
                </div>
              </div>
            </div>
            <!-- 유저 비밀번호 입력창 -->
            <div formGroupName="passwordGroup">
              <div class="elem">
                <h4 class="elem-title">Password</h4>
                <div class="input-password">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    formControlName="password"
                    placeholder="Enter Password"
                  >
                  <em *ngIf="password.errors?.required && password.touched" class="">
                    Enter your password!
                  </em>
                </div>
              </div>
              <!-- 유저 비밀번호 확인 입력창 -->
              <div class="elem">
                <h4 class="elem-title">Comfirm Password</h4>
                <div class="confirm-password">
                  <input
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    formControlName="confirmPassword"
                    placeholder="Confirm Password"
                  >
                  <em *ngIf="confirmPassword.errors?.required && confirmPassword.touched" class="">
                    Enter your password!
                  </em>
                  <em *ngIf="passwordGroup.errors?.match && confirmPassword.touched && !confirmPassword.error?.required" class="">
                    Match your password!
                  </em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 버튼 창 -->
        <div class="row box-footer">
          <div class="btn-set-wrapper">
            <button type="submit" class="btn btn-type1 bg-orange" [disabled]="userForm.invalid">Submit</button>
            <button class="btn btn-type1 bg-grey">Cancel</button>
          </div>
        </div> <!-- // box-footer -->
      </form>
    </div>
    {{ userForm.value | json }}
  `,
  styleUrls: ['../user-style.scss']
})
export class SignUpComponent implements OnInit {
  // 서비스로 빼야 할 것 같은데 일단은 이렇게 작업해두자
  userForm: FormGroup;
  signupForm: any;
  regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  appUrl = environment.appUrl;

  constructor( @Inject(FormBuilder) private fb: FormBuilder,
               @Inject(HttpClient) private http: HttpClient,
               @Inject(Router) private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [
        Validators.required,
        Validators.pattern(this.regexr)
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match })
    });
  }

  get userName() {
    return this.userForm.get('userName');
  }
  get userEmail() {
    return this.userForm.get('userEmail');
  }
  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }
  get password() {
    return this.userForm.get('passwordGroup.password');
  }
  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }


  onSubmit() {
    this.signupForm = {
      nickname: this.userName.value,
      email: this.userEmail.value,
      password1: this.password.value,
      password2: this.confirmPassword.value
    };
    console.log(this.signupForm);
    if (this.userForm.status === 'VALID') {
      this.http.post(`${this.appUrl}/auth/signup/`, this.signupForm)
        .subscribe(res => {
          console.log(res);
          console.log('회원가입 성공!');
          this.router.navigate(['signin']);
          return false;
        });
    } else {
      console.log('invalid token');
    }
  }
}
