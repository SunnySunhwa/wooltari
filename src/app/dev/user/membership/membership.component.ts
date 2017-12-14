import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';
import { Router } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http/src/response';
import { environment } from '../../../../environments/environment';

interface User {
  pk: number;
  user_type: string;
  email: string;
  nickname: string;
  is_active: string;
  date_joined: string;
}

@Component({
  selector: 'app-membership',
  template: `
    <h1>Membership</h1>
    <div class="container">
    <button type="button" (ngSubmit)="logout()">로그아웃</button>
      <!-- 리엑티브 폼 그룹 -->
      <form [formGroup]="userForm" (ngSubmit)="editProfile()" novalidate>
        <div class="row profile">
          <!-- 유저네임 뷰 -->
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
          <!-- 유저 이메일 뷰 -->
            <div class="elem">
              <h4 class="elem-title">User Email</h4>
              <div class="elem-conts">
                <div class="input-email">

                </div>
              </div>
            </div>
            <!-- 유저 비밀번호 입력창 -->
            <div formGroupName="passwordGroup">

              <div class="elem">
                <h4 class="elem-title">New Password</h4>
                <div class="new-password">
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
export class MembershipComponent implements OnInit {
  //서비스로 빼야 할 것 같은데 일단은 이렇게 작업해두자
  userForm: FormGroup;
  regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  appUrl = environment.apiUrl;
  Email: string;
  Nickname: string;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    @Inject(AuthService) private auth: AuthService,
    @Inject(Router) private router: Router,
    @Inject(HttpClient) private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getProfile();
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
  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }
  get password() {
    return this.userForm.get('passwordGroup.password');
  }
  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  getProfile() {
    this.http.get<User>(`${this.appUrl}/profile/${this.auth.getUserPk}/`)
      .subscribe(res => {
        this.Email = res.email;
        this.Nickname = res.nickname;
        console.log(res);
        console.log('회원정보 불러오기 성공!');
      });
  }

  editProfile() {
    const editProfileForm = {
      nickname: this.userName.value,
      password1: this.password.value,
      password2: this.confirmPassword.value
    };
    console.log(`[payload] ${editProfileForm}`);
    this.http.post(`${this.appUrl}/profile/signup/`, editProfileForm)
      .subscribe(res => {
        console.log(res);
        console.log('회원정보 수정 성공!');
        this.router.navigate(['membership']);
      });
  }

  logout() {
    this.auth.signout();
  }
}
